import { User } from '@auth0/auth0-spa-js';
import { popoverController } from '@ionic/core';
import { Component, h, Host, State } from '@stencil/core';
import { ionProgressBar, presentToast } from '../../helpers/utils';
import { auth0 } from '../../services/auth0';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State()
  user: User;
  async login() {
    await auth0.loginWithRedirect();
  }

  async callAPI() {
    try {
      const accessToken = await auth0.getTokenSilently();
      const response = await fetch('http://localhost:3000/api/file/sunrise-baseline.jpg', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }

      if (!response.body) {
        throw Error('Readable not yet supported in this browser.');
      }

      const contentLength = response.headers.get('Content-Length');

      if (contentLength === null) {
        throw Error('Response size header unavailable');
      }

      const total = parseInt(contentLength, 10);
      let loaded = 0;

      ionProgressBar.hidden = false;

      const result = await new Response(
        new ReadableStream({
          start(controller) {
            const reader = response.body.getReader();

            read();
            async function read() {
              try {
                const { done, value } = await reader.read();

                if (done) {
                  controller.close();
                  return;
                }

                loaded += value.byteLength;
                ionProgressBar.value = loaded / total;
                controller.enqueue(value);
                read();
              } catch (error) {
                controller.error(error);
              }
            }
          },
        }),
      ).blob();

      document.querySelector('#result').setAttribute('src', URL.createObjectURL(result));
    } catch ({ message }) {
      presentToast(message);
    } finally {
      ionProgressBar.hidden = true;
      ionProgressBar.value = 0;
    }
  }

  async presentPopover(event) {
    window._popover = await popoverController.create({
      component: 'popover-profile',
      cssClass: 'presentPopover',
      event,
      translucent: true,
    });

    await window._popover.present();
  }

  async connectedCallback() {
    try {
      if (window.location.search.match(/\?code.*state.*/g)) {
        ionProgressBar.type = 'indeterminate';
        ionProgressBar.hidden = false;
        await auth0.handleRedirectCallback();
        window.history.replaceState({}, document.title, '/');
      }

      this.user = await auth0.getUser();
    } catch ({ message }) {
      presentToast(message);
    } finally {
      ionProgressBar.type = 'determinate';
      ionProgressBar.hidden = true;
    }
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
            <ion-buttons slot="primary">
              {this.user ? (
                <ion-avatar onClick={event => this.presentPopover(event)}>
                  <img src={this.user?.picture} />
                </ion-avatar>
              ) : (
                <ion-button onClick={() => this.login()}>Log in</ion-button>
              )}
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-button onClick={() => this.callAPI()} hidden={!this.user}>
            Call API
          </ion-button>

          <img id="result" />
        </ion-content>
      </Host>
    );
  }
}

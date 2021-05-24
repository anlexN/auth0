import { User } from '@auth0/auth0-spa-js';
import { Component, Host, h } from '@stencil/core';
import { ionProgressBar, presentToast } from '../../../helpers/utils';
import { auth0 } from '../../../services/auth0';

@Component( {
  tag: 'popover-profile',
  styleUrl: 'popover-profile.css',
  shadow: true,
} )
export class PopoverProfile {
  user: User;

  async logout() {
    try {
      ionProgressBar.type = 'indeterminate';
      ionProgressBar.hidden = false;

      await window._popover.dismiss();
      auth0.logout( {
        returnTo: window.location.origin,
      } );
      window._popover = null;
    } catch ( { message } ) {
      presentToast( message );
    } finally {
      ionProgressBar.type = 'determinate';
      ionProgressBar.hidden = true;
    }
  }

  async componentWillRender() {
    this.user = await auth0.getUser();
  }
  render() {
    return (
      <Host>
        <ion-list lines="full">
          <ion-item class="first">
            <ion-label>
              <ion-avatar>
                <img src={ this.user?.picture } />
              </ion-avatar>
              <h2>{ this.user?.name }</h2>
              <h3>{ this.user?.email }</h3>
              <ion-button
                onClick={ async () => {
                  await window._popover.dismiss();
                } }
                color="medium"
                href={ `/profile/${ this.user?.name }` }
                fill="outline"
                shape="round"
              >
                Manage your account
              </ion-button>
            </ion-label>
          </ion-item>
          <ion-item href="#" class="second">
            <ion-icon name="person-add-outline" slot="start"></ion-icon>
            <ion-label>Add another account</ion-label>
          </ion-item>
          <ion-item class="third" lines="none">
            <ion-button onClick={ () => this.logout() } fill="outline" size="default">
              Log out
            </ion-button>
          </ion-item>
        </ion-list>
      </Host>
    );
  }
}

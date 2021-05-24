import { toastController } from "@ionic/core";

async function presentToast( message: string ) {
  const toast = await toastController.create( {
    message,
    duration: 2000
  } );

  toast.present();
}
function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

const ionProgressBar = document.querySelector('ion-progress-bar');

export { presentToast, sayHello, ionProgressBar }
import { Component, OnInit } from '@angular/core';
import {  NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //enviar y recibir estas variables
  cadena: string ="Mi Cadena";
  precio: number = 30;

  activado: boolean = false;

  arreglo_numerico: number[] = [1,2,3,4,5]; 
  arreglo_cadena: string[] = ["Pedro","Juan","Diego"];

  variable: any = 'mi valor';
  arreglo_variable: any[] = ["Pedro","Juan","Diego",1];


  constructor(private router:Router, 
              private toastController: ToastController, 
              private alertController: AlertController) {}


  ngOnInit() {
  }


  navegarAOtraPagina() {
    let NavigationExtras: NavigationExtras = {
       state:{
         cadenaEnviada: this.cadena,
         precioEnviado: this.precio 
       }
    }
    this.router.navigate(['/otra'], NavigationExtras); 
}

  navegarAMiPagina() {
    
      this.router.navigate(['/tabs']); 
  }

  
  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Este es un mensaje de toast!',
      duration: 2000
    });
    toast.present();
  }


  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            // Aquí puedes colocar el código que deseas ejecutar cuando el usuario presiona "OK"
            //console.log('El usuario presionó OK');
            this.router.navigate(['/tabs']); 
          },
          
        }
      ]
      
    });

    await alert.present();
  }





}


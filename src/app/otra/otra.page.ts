import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-otra',
  templateUrl: './otra.page.html',
  styleUrls: ['./otra.page.scss'],
})
export class OtraPage implements OnInit {


  cadenaRecibida: string='';
  precioRecibido: number=0;

  constructor(private router:Router,
              private activateroute:ActivatedRoute) {
     this.activateroute.queryParams.subscribe ( params => {

      if(this.router.getCurrentNavigation()?.extras?.state){

         this.cadenaRecibida = this.router.getCurrentNavigation()?.extras?.state?.['cadenaEnviada'];
         this.precioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['precioEnviado'];
      } 
     })
 

  }

  ngOnInit() {
  }

}

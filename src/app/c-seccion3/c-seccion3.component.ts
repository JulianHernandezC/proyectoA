import { Product } from './../models/Product';
import { ProductosService } from './../servicio/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-c-seccion3',
  templateUrl: './c-seccion3.component.html',
  styleUrls: ['./c-seccion3.component.css']
})
export class CSeccion3Component implements OnInit {
  ciudad:string='';
  poblacion:string='';
  productos: Product[] = [];

  constructor(private route:ActivatedRoute, productosService: ProductosService) {
    this.productos = productosService.listadoProductos();
   }

  ngOnInit(): void {
    this.route.params.subscribe ( (params) => {
      if (params['ciudad'] != null) {
        this.ciudad = params['ciudad']; 
      }
    });
    this.route.params.subscribe ( (params) => {
      if (params['poblacion'] != null) {
        this.poblacion = params['poblacion']; 
      }
    });
  }

}

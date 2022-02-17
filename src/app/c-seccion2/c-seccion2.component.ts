import { Component, OnInit, OnDestroy  } from '@angular/core'; //DoCheck
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit, OnDestroy {//}, DoCheck {
  nombrePersona:string='';
  
  formcomentarios:FormGroup = new FormGroup ( {
    usuario: new FormControl('', Validators.required),
    comentarios: new FormControl('',  [Validators.required, Validators.minLength(10)])
  });
  
  constructor(private route:ActivatedRoute) {     
  }

  ngOnInit(): void { 
    this.route.params.subscribe ( (params) => {
      if (params['nombre'] != null) {
        this.nombrePersona = params['nombre'];
      }
    });
    console.log("Nombre anterior: "+localStorage.getItem("NOMBRE_ANTERIOR"));
  }

  ngOnDestroy():void {
    //localStorage.removeItem("NOMBRE_ANTERIOR");
    if (this.nombrePersona)
      localStorage.setItem("NOMBRE_ANTERIOR", this.nombrePersona);
    else 
      localStorage.setItem("NOMBRE_ANTERIOR", "(ningún nombre recibido por parámetro)");
  }

  /*ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log (  JSON.stringify (this.f['usuario'].value) );
    
  }*/


  get f() { return this.formcomentarios.controls; }

  mostrarComentario() {
    console.log ("El usuario '"+this.f['usuario'].value+"' ha escrito el comentario: '"+this.f['comentarios'].value+"'.");
  }
}

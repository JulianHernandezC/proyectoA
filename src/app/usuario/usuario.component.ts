import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios:any;
  usuarioAagregar={name:'', username:'', email:''};

  constructor(private usService: UsuariosService) {
    this.listarUsuarios();
   }

  ngOnInit(): void {
  }

  listarUsuariosSimple() {
    this.usuarios = this.usService.listadoDeUsuarios();
  }


  listarUsuarios():void {
    this.usService.listarUsuarios().subscribe({
          next: (r) => {
            this.usuarios = r;
            console.log (this.usuarios);
          },
          error: (e) => console.log( JSON.stringify(e))
    });
  }


  eliminarUsuario (id_usuario:number) { 
    console.log("Eliminar usuario:" +id_usuario)
    this.usService.eliminarUsuario(id_usuario).subscribe ( {
                                            next: () => {
                                              for (let i=0; i<this.usuarios.length; i++)
                                                if ( this.usuarios[i].id == i+1)
                                                  this.usuarios.splice(i, i);
                                            },
                                            //this.listarUsuarios(), 
                                            error: (e) => console.log(JSON.stringify(e))
                                        });
  }

  nuevoUsuario () {
    console.log("NuevoUsuario.");

    this.usService.nuevoUsuario (this.usuarioAagregar).subscribe ( {
                                          next: () => this.usuarios.push(this.usuarioAagregar)  ,//this.listarUsuarios(), 
                                          error: (e) => console.log(JSON.stringify(e))
                                        });
  }



  limpiarUsuarios() {
    if (this.usuarios!=null && this.usuarios.length>0)
      this._clearUsers();
  }

    private _clearUsers() {
      this.usuarios=[];
    }

}

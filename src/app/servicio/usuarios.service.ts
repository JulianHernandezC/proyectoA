import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  listarUsuarios():Observable<any> {
    return this.httpClient.get( "https://jsonplaceholder.typicode.com/users/"); //environment.apiRest + "/users");
  }

  eliminarUsuario(id_usuario:number):Observable<any> {
    return this.httpClient.delete("https://jsonplaceholder.typicode.com/users/"+id_usuario);
  }
  
  nuevoUsuario ( nuevoUsuario:any ) {
    let json = JSON.stringify (nuevoUsuario);

    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post("https://jsonplaceholder.typicode.com/users/", json, {headers: header}) ;
  }

  listadoDeUsuarios():any {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}

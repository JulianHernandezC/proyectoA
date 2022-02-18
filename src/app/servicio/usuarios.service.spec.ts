import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UsuariosService } from './usuarios.service';

const listUsers:any = [ {employee_name: 'Ana', employee_age:22}, 
                        {employee_name: 'Luis', employee_age: 40}];

describe('UsuariosService', () => {
  let service: UsuariosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule /*no realiza una petición HTTP real*/
        ],
        providers: [
            UsuariosService
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] //Para evitar ciertos errores 
    });
    service = TestBed.inject(UsuariosService);
  });

  beforeEach(() => {
    service = TestBed.inject(UsuariosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach( () => {
    httpMock.verify(); //Forzar a que no haya peticiones pendientes entre cada test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('listarUsuarios return list and does a get method', () => {
    service.listarUsuarios().subscribe( (resp: any[]) =>{
        expect(resp).toEqual(listUsers);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users/');
    expect(req.request.method).toBe('GET');
    req.flush(listUsers); //Simulamos petición get y devolvemos 'listUsers'
  });

});
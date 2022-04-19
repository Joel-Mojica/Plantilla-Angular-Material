import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServInsertService {

  constructor(private http:HttpClient) {}

  query(): Observable<any>{
    let opcion = {
          query: `select local,
                  num_empleado,
                  nombre,
                  cedula,
                  telefono 
                  from empleados
                  where estado = 'A'
                  and local = 'GVMG'
                  and rownum < 30 `,
          mode: 0
        }
    return this.http.post('https://grupoviamar.com/api/Soap/Soap2.php',opcion);
  }

 
}

import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8083/cliente/';
  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]> { 
   return this.http.get<Cliente[]>(this.urlEndPoint+'getAll')
  }

  public create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint+'crear',cliente, {headers: this.httpHeaders});
  }

  public getCliente(id: number): Observable<Cliente>{
      return this.http.get<Cliente>(this.urlEndPoint+id)
  }

  public update(cliente:Cliente ): Observable<Cliente>{
    return this.http.put<Cliente>(this.urlEndPoint+'actualizar/'+cliente.id, cliente,  {headers: this.httpHeaders})
  }

  public delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(this.urlEndPoint+'eliminarCliente/'+id, {headers: this.httpHeaders})
  }


}

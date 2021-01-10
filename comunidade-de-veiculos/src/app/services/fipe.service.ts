import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor(private http: HttpClient) { }
  public getMarcasCarros(): Observable<any>{
    return this.http.get(`http://fipeapi.appspot.com/api/1/carros/marcas.json`);
  }

  public getListaDeVeiculosPorMarca(): Observable<any>{
    return this.http.get(`http://fipeapi.appspot.com/api/1/carros/veiculos/{{idMarca}}.json`)
  }

  public getListaDeVeiculosPorAno(): Observable<any>{
    return this.http.get(`http://fipeapi.appspot.com/api/1/carros/veiculo/{{idMarca}}/{{idVeiculo}}.json`);
  }

  public getListaDeVeiculosPorValores(): Observable<any>{
    return this.http.get(`http://fipeapi.appspot.com/api/1/carros/veiculo/{{idMarca}}/{{idVeiculo}}/{{idVeiculoAno}}.json`);
  }
}

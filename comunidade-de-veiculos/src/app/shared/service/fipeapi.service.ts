import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class FipeapiService {

  apiUrl = 'https://fipeapi.appspot.com/api/1/carros/veiculo/';


  constructor(
    private HttpClient: HttpClient
  ) { }

  public getFipeapiWithFlag(flag: string): Observable<ResponsePageable>{
    return this.HttpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  }
}

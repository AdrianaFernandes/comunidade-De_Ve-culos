import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Api } from 'src/app/app.api';


@Injectable ()

export class CardService {
    constructor (private http:Http) {

    }

    veiculos(): Observable<Veiculos[]> {
      return this.http.get(`${Api}`).map(response=>response.json())
    }
}

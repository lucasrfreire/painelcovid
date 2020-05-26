import { Http } from "@angular/http";

import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";
import { Casoscovid } from "./casoscovid.model";
import { Observable } from "rxjs/Observable";

const CASOS: Array<Casoscovid> = [
    { uf: 'DF', cases: 80},
    { uf: 'GO', cases: 2},
    { uf: 'MG', cases: 25},
    { uf: 'MT', cases: 38},
    { uf: 'PA', cases: 19}
];

@Injectable()

export class CasocovidService {
    public casoscovidUrl = 'api/teste';

    public constructor(private http: Http){

    }
    public getCasoscovid(): Observable<Casoscovid[]>{
        return this.http.get(this.casoscovidUrl)
        .map((response: Response) => response.json().data as Casoscovid)
    }
}
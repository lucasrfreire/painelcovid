import { Http, Response } from "@angular/http";

import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";


import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Casoscovid } from "./casoscovid.model";

/*
const CASOS: Array<Casoscovid> = [
    { uf: 'DF', cases: 80},
    { uf: 'GO', cases: 2},
    { uf: 'MG', cases: 25},
    { uf: 'MT', cases: 38},
    { uf: 'PA', cases: 19}
];
*/
@Injectable()

export class CasocovidService {
    public casoscovidUrl = 'https://covid19-brazil-api.now.sh/api/report/v1';

    public constructor(private http: Http){

    }
    public getAll(): Observable<Casoscovid[]>{
        return this.http.get(this.casoscovidUrl)
        .map((response: Response) => response.json().data as Casoscovid[])
    }

    public getCasosPorEstado(uf: string): Observable<Casoscovid>{
        let url = `${this.casoscovidUrl}/brazil/uf/${uf}`;
        return this.http.get(this)
        .map((response: Response) => response.json().data as Casoscovid)
    }
    
}
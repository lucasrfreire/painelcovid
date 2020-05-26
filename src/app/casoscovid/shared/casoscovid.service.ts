import { Injectable } from "@angular/core";

import { Casoscovid } from "./casoscovid.model";

const CASOS: Array<Casoscovid> = [
    { uf: 'DF', cases: 80},
    { uf: 'GO', cases: 2},
    { uf: 'MG', cases: 25},
    { uf: 'MT', cases: 38},
    { uf: 'PA', cases: 19}
];

@Injectable()

export class CasocovidService {
    public getCasoscovid(): Array<Casoscovid>{
        return CASOS;
    }
}
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
    public getCasoscovid(): Promise<Casoscovid[]>{
        let promise = new Promise((resolve, reject) => {
            if(CASOS.length > 0){
                resolve(CASOS);
            }else{
                let error_msg = "Não há registros";
                reject(error_msg)
            }
        })

        return promise;
    }
}
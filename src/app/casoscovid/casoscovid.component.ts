import { Component, OnInit } from '@angular/core';

import { Casoscovid } from "./shared/casoscovid.model";

import { CasocovidService } from "./shared/casoscovid.service";

@Component({
    selector: 'casoscovid',
    templateUrl: './casoscovid.component.html'
})

export class CasoscovidComponent implements OnInit{
    public casoscovid: Array<Casoscovid>;
    public casoselecionado: Casoscovid;
    //private casoscovidService: CasocovidService;

    public constructor(private casoscovidService: CasocovidService){
        
    }

    public ngOnInit(){
        this.casoscovidService.getCasoscovid()
        .subscribe(
            casoscovid => this.casoscovid = casoscovid,
            error => alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        )
            
    }

    public onSelect(casocovid: Casoscovid): void {
        this.casoselecionado = casocovid;
    }
}
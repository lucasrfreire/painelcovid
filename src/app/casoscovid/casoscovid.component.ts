import { Component, OnInit } from '@angular/core';

import { Casoscovid } from "./shared/casoscovid.model";

import { CasocovidService } from "./shared/casoscovid.service";

@Component({
    selector: 'casoscovid',
    templateUrl: './casoscovid.component.html',
    providers: [ CasocovidService ]
})

export class CasoscovidComponent implements OnInit{
    public casoscovid: Array<Casoscovid>;
    public casoselecionado: Casoscovid;
    //private casoscovidService: CasocovidService;

    public constructor(private casoscovidService: CasocovidService){
        
    }

    public ngOnInit(){
        this.casoscovidService.getCasoscovid()
            .then((casoscovid) => this.casoscovid = casoscovid)
            .catch((error_msg) => alert(error_msg));
            
    }

    public onSelect(casocovid: Casoscovid): void {
        this.casoselecionado = casocovid;
    }
}
import { Component, OnInit } from '@angular/core';

import { Casoscovid } from "../casoscovid/shared/casoscovid.model";

import { CasocovidService } from "../casoscovid/shared/casoscovid.service";


@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit{
    public casoscovid: Array<Casoscovid>;
    public casoselecionado: Casoscovid;
    //private casoscovidService: CasocovidService;

    public constructor(private casoscovidService: CasocovidService){
        
    }

    public ngOnInit(){
        this.casoscovidService.getAll()
        .subscribe(
            casoscovid => this.casoscovid = casoscovid,
            error => alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        )
            
    }

    public onSelect(casocovid: Casoscovid): void {
        this.casoselecionado = casocovid;
    }

}
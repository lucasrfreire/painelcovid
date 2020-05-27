import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { Casoscovid } from "../shared/casoscovid.model";
import { CasocovidService } from "../shared/casoscovid.service";

@Component({
    selector: 'casocovid-detalhes',
    templateUrl: './casocovid-detalhes.component.html'
})

export class CasocovidDetalhesComponent implements OnInit{
    public casocovid: Casoscovid;

    public constructor(
        private casocovidService: CasocovidService,
        private route: ActivatedRoute
    ){

    }

    public ngOnInit(){
        this.route.params
            .switchMap((params: Params) => this.casocovidService.getCasosPorEstado(params['uf']))
            .subscribe(casocovid => this.casocovid = casocovid)
    }
}
import { Component, Input } from "@angular/core";

import { Casoscovid } from "../shared/casoscovid.model";

@Component({
    selector: 'casocovid-detalhes',
    templateUrl: './casocovid-detalhes.component.html'
})

export class CasocovidDetalhesComponent {
    @Input() public casocovid: Casoscovid;

    public constructor(){

    }
}
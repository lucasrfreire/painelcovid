import { Component, OnInit } from '@angular/core';

const CASOS: Array<any> = [
    { uf: 'DF', cases: 80},
    { uf: 'GO', cases: 2},
    { uf: 'MG', cases: 25},
    { uf: 'MT', cases: 38},
    { uf: 'PA', cases: 19}
];

@Component({
    selector: 'casoscovid',
    templateUrl: './casoscovid.component.html'
})

export class CasoscovidComponent implements OnInit{
    public casoscovid;

    public constructor(){

    }

    public ngOnInit(){
        this.casoscovid = CASOS;
    }
}
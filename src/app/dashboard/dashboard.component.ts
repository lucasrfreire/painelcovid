import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { Casoscovid } from "../casoscovid/shared/casoscovid.model";
import { CasocovidService } from "../casoscovid/shared/casoscovid.service";

@Component({
  selector: 'Dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(
    private casocovidService: CasocovidService,
    private route: ActivatedRoute
  ) {
    /*this.route.queryParams.subscribe((params: Params) => {
      let date = params['uf'];
      console.log(date); // Print the parameter to the console. 
  });*/
  }

  public casocovid: Casoscovid;
  public infoChart: Casoscovid[];
  public casosdaSemana: Casoscovid[] = [];
  public casodoDia1: Casoscovid;
  public casodoDia2: Casoscovid;
  public casodoDia3: Casoscovid;
  public casodoDia4: Casoscovid;
  public casodoDia5: Casoscovid;
  public casodoDia6: Casoscovid;
  public casodoDia7: Casoscovid;
  public ufAtual;
  

  public setufAtual(uf) {
    console.log(uf);
    this.ufAtual = uf;
  }

  public setDados(deaths, cases, datetime, element, numero){
    console.log(numero);
    if(numero == 1){
      console.log(element);
      this.casodoDia1.datetime = datetime;
      this.casodoDia1.deaths = deaths;
      this.casodoDia1.cases = cases;
    }
    if(numero == 2){
      console.log(element);
      this.casodoDia2.datetime = datetime;
      this.casodoDia2.deaths = deaths;
      this.casodoDia2.cases = cases;
    }
    if(numero == 3){
      console.log(element);
      this.casodoDia3.datetime = datetime;
      this.casodoDia3.deaths = deaths;
      this.casodoDia3.cases = cases;
    }
    if(numero == 4){
      console.log(element);
      this.casodoDia4.datetime = datetime;
      this.casodoDia4.deaths = deaths;
      this.casodoDia4.cases = cases;
    }
    if(numero == 5){
      this.casodoDia5.datetime = datetime;
      this.casodoDia5.deaths = deaths;
      this.casodoDia5.cases = cases;
    }
    if(numero == 6){
      this.casodoDia6.datetime = datetime;
      this.casodoDia6.deaths = deaths;
      this.casodoDia6.cases = cases;
    }
    if(numero == 7){
      this.casodoDia7.datetime = datetime;
      this.casodoDia7.deaths = deaths;
      this.casodoDia7.cases = cases;
    }
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  public formatarData(dias: number, uf: string) {
    let data = new Date();
    data.setDate(data.getDate() - dias);
    let dataFormatada = data.getFullYear() + '' + ('0' + (data.getMonth() + 1)).slice(-2) + '' + ('0' + data.getDate()).slice(-2);
    this.casocovidService.getUltimaSemana(dataFormatada)
      .subscribe(
        (casoscovid) => {
        casoscovid.forEach(element => {
          if (element.uf == uf) {
            console.log(element['cases']);
            this.setDados(element.deaths, element.cases, element.datetime, element, dias);
          }

        });
      })
  }

  
  public filterData(locationName) {

    return this.casosdaSemana.filter(object => {
      return object['uf'] == locationName;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.ufAtual = params.get('uf');
      }
    )


    /*this.route.params
    .subscribe(
      ((params: Params) => {
        this.ufAtual = params['uf']
      })
    )*/

    this.formatarData(1, this.ufAtual);
    this.formatarData(2, this.ufAtual);
    this.formatarData(3, this.ufAtual);
    this.formatarData(4, this.ufAtual);
    this.formatarData(5, this.ufAtual);
    this.formatarData(6, this.ufAtual);
    this.formatarData(7, this.ufAtual);
    /*
        for (let dias = 7; dias >= 0; dias--) {
          let data = new Date();
          data.setDate(data.getDate() - dias);
          let dataFormatada = data.getFullYear() + '' + ('0' + (data.getMonth() + 1)).slice(-2) + '' + ('0' + data.getDate()).slice(-2);
          this.casocovidService.getUltimaSemana(dataFormatada)
            .subscribe( 
              (function (casocovid) {
                let index = 0;
                casocovid.forEach(element => {
                  if(element){
                    this.casosdaSemana[index] = element;
                  }else{
                    this.casosdaSemana[index] = 'Não há registros';
                  }
                  index++;
                });
                /*
                for (let index = 0; index < casocovid.length; index++) {
                  if(casocovid[index]){
                    this.casosdaSemana[index] = casocovid[index];
                    console.log(this.casosdaSemana)
                  }else{
                    this.casosdaSemana[index] = 'Não há registros!';
                  }
                  
                }
                
              }),
              //casoscovid => this.casosdaSemana.push(casoscovid),
              error => alert("Ocorreu um erro no servidor, tente novamente mais tarde")
            )
        }*/

  

    //console.log(this.casosdaSemana);
    //this.infoChart = this.filterData(this.ufAtual);
    //console.log(this.casosdaSemana);
    //console.log(this.casosdaSemana.length);
    //console.log(this.casosdaSemana[0]);
    //console.log(this.casosdaSemana);


    /*
        this.route.params
          .switchMap((params: Params) => this.casocovidService.filterData(params['uf'], this.casosdaSemana))
          .subscribe(dadosFiltrados => this.infoChart = dadosFiltrados)
    
        console.log(this.infoChart);*/
  }


  public barChartLabels = [
    //this.casodoDia1.cases,
    //this.casodoDia2.cases,
    //this.casodoDia3.cases,
    //this.casodoDia4.cases,
    //this.casodoDia5.cases,
    //this.casodoDia6.cases,
    //this.casodoDia7.cases
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    //{data: Array[], label: 'Mortes'},
    //{data: Array[], label: 'Casos Confirmados'}

    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Mortes' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Casos Confirmados' }

  ];


}
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public isEnable: boolean = true;
  public dateNow:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // viewMoment(){
  //   console.log(moment.locale()); // en
  //   moment.locale('fr');
  //   console.log(moment.locale()); // en
  //   moment.locale('pt-BR');
  //   console.log(moment.locale()); // pt-BR
  // }

  test() {
    const DATE = moment();
    let dateInFormat = DATE.format('YYYY.M.D');
    console.log(dateInFormat);
    this.isEnable = !this.isEnable;
    this.dateNow = dateInFormat;
  }


}

import { Component } from '@angular/core';
import { InformacionService } from '../services/informacion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  informacionTODO: any;

  constructor(
    private _informacionService: InformacionService
  ) {}

  ngOnInit(){

    this.informacionTODO = this. _informacionService.informacion;
    console.log;

  }
}

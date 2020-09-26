import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {

  infoIndividual: any;
  informacion: any;
  id:any;

  constructor(
    private _route: ActivatedRoute
  ) { 
    this.id = this._route.snapshot.paramMap.get('id');
    this.infoIndividual = this._info.getDetail(this.id);
  }

  ngOnInit() {
  }
  getDetail(id){

    return this.informacion.find(item=>item.id == id);
    }
}

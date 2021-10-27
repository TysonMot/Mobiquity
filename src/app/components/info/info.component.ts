import { Component, OnInit } from '@angular/core';
import {MobiquityApiService} from "../../services/mobiquity-api.service";
import {ActivatedRoute} from "@angular/router";
import {RaceViewModel} from "../../models/race-view-model";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public _raceService : MobiquityApiService, public activatedRoute : ActivatedRoute, public _raceViewModel : RaceViewModel) { }

  public ref : any;
  public year : any;
  public data : any = []

  public async ngOnInit(): Promise<void> {

  ///methods to get passed id's
    this.ref = this.activatedRoute.snapshot.paramMap.get('ref')
    this.year = this.activatedRoute.snapshot.paramMap.get('year')

    //I am assigning this values again so that when a user refreshes the page we can still return the results using passed parameters
    this._raceViewModel.ref = await this.ref
    this._raceViewModel.year = await this.year


    //function to get data from passed view models data, this function can be used anyway since it accepts data from view model
    this._raceService.getDataById().then(res => {
      console.log(res.results)
      this.data.push(res.results)
    })

  }

}

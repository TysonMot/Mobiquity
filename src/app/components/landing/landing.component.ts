import { Component, OnInit } from '@angular/core';
import {MobiquityApiService} from "../../services/mobiquity-api.service";
import {RaceViewModel} from "../../models/race-view-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public seasons : any = []
  public searchTerm : any = ''
  public date = new Date();
  public year : number;
  public years : any = [];
  public startYear : number = 2005;
  public searchResults : any = [];


  constructor(public _mobiquityApi : MobiquityApiService, public _raceViewModel : RaceViewModel, public _route : Router) { }


  //this function is used to search results by year
  public async search(): Promise<void> {
    this.searchResults = []
    this._mobiquityApi.getDataByYear(this.searchTerm).then(res => {
        this.searchResults.push(res.results)
    })

  }


  //allows you to go to other the page by passing id
  public async viewData(round, season): Promise<void> {
    this._raceViewModel.ref = await round
    this._raceViewModel.year = await season

    //navigate to details page after passing required variables

    await this._route.navigate(['/','info',round,season])

  }



 public async ngOnInit(): Promise<void>  {

    ///define current date
    this.year = this.date.getFullYear();

   // loop to get all list of years to date
    while ( this.startYear <= this.year ) {
      this.years.push(this.startYear++);
    }


    //get data from f1 api
    this._mobiquityApi.getData().then(res => {
      this.seasons.push(res.results)
      console.log(res.results)
    })

  }

}

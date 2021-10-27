import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RaceViewModel} from "../models/race-view-model";

@Injectable({
  providedIn: 'root'
})
export class MobiquityApiService {

  public url : any = 'http://ergast.com/api/f1/'

  constructor(public http: HttpClient, public _raceViewModel : RaceViewModel) { }


  //this is an automated function to display data when application opens
  public async getData(): Promise<{ results : any }> {
    let data : any = []
    this.http.get(this.url + 2005 + '.json').subscribe(res => {
      data.push(res['MRData'].RaceTable.Races)
    })
    return { results : data}
  }


  //getting data by year
  public async getDataByYear(year): Promise<{ results : any }> {
    let data : any = []
    this.http.get(this.url + `${year}`+ '.json').subscribe(res => {
      data.push(res['MRData'].RaceTable.Races)
    })
    return { results : data}
  }

///get data by year, round
  public async getDataById(): Promise<{ results : any }> {
    let data : any = []
    this.http.get(this.url + `${this._raceViewModel.year}` + '/' +  `${this._raceViewModel.ref}` + '/results.json').subscribe(res => {
      data.push(res['MRData'].RaceTable.Races)
    })
    return { results : data}
  }

}

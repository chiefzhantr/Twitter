import { Component } from '@angular/core';
import {SettingsService} from "./settings.service";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  phone_number : string ='';
  constructor(private settingsService: SettingsService,) {

  }

  update(){
    // @ts-ignore
    let user_id = parseInt(localStorage.getItem('id'));
    this.settingsService.updateValues(user_id,this.phone_number).subscribe((data)=>{
      console.log(this.phone_number)
        this.phone_number=''
    })
  }


}

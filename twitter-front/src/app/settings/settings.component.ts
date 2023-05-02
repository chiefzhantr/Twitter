import { Component } from '@angular/core';
import {SettingsService} from "./settings.service";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  username: string = '';
  first_name: string = '';
  last_name: string = '';
  password:string ='';
  phone_number : string ='';
  constructor(private settingsService: SettingsService, private apiService : ApiService) {

  }
  update(){
    // @ts-ignore
    let user_id = parseInt(localStorage.getItem('id'));
    // if (user_id == null) {
    //   user_id = -1;
    // }
    console.log(user_id)
    console.log(this.username)
    console.log(this.first_name)
    console.log(this.last_name)
    console.log(this.password)
    this.settingsService.updateValues(this.username,this.first_name,this.last_name,this.password,user_id).subscribe((data)=>{
      localStorage.setItem('username', data.username)
      this.username='';
      this.first_name='';
      this.last_name='';
      this.password='';
    })
  }


}

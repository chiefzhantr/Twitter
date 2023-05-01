import { Component } from '@angular/core';
import {SettingsService} from "./settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  id: string = '';
  username: string = '';
  firstname: string = '';
  lastname: string = '';
  password:string ='';
  phone_number : string ='';
  constructor(private settingsService: SettingsService) {

  }
  update(){
    this.settingsService.updateValues(this.id,this.username,this.firstname,this.lastname,this.password).subscribe((data)=>{
      this.username='';
      this.firstname='';
      this.lastname='';
      this.password='';
    })
  }


}

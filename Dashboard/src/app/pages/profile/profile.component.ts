import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service'; 
import {ApiService} from '../../services/api.service' 
 
@Component({ 
  selector: 'app-profile', 
  templateUrl: './profile.component.html', 
  styleUrls: ['./profile.component.scss'] 
}) 
export class ProfileComponent implements OnInit { 
 
  constructor( 
    private _api : ApiService, 
    private _auth: AuthService, 
  ) { } 
 
  userdetails:any;

  ngOnInit(): void { 
    this._auth.updateUserData();
    this._api.getTypeRequest('users/profile/')
    .subscribe(data=>{this.userdetails=data;});
    this._auth.refreshToken();

  } 
}

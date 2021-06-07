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
    private api : ApiService, 
    private _auth: AuthService, 
    private router:Router
  ) { } 
 
  userdetails:any;
  pwdchange:any;
  action:string;
  pwdrequest:any;
  deleterequest:any;
  deleteresult:string;

  ngOnInit(): void { 
    this.pwdrequest={'oldpwd':'','newpwd':''}
    this.deleterequest={'pwd':''}
    this.pwdchange= {'progress':false,'ok':false};
    this.userdetails = this._auth.getUserDetails();
    
  } 

  chpwd(){
    this.pwdchange['progress'] = true;
    this.api.changeuserpwd(this.userdetails.email,this.pwdrequest.newpwd,this.pwdrequest.oldpwd).subscribe(data=>{
    this.pwdchange['ok'] = true;
    this.pwdchange['progress'] = false;
    this.pwdchange['done'] = true;
    setTimeout(()=>{
      this.pwdchange= {'progress':false,'ok':false};this.action=''},1500);
      this.pwdrequest={'oldpwd':'','newpwd':''};    
  },
  error => {
    this.pwdchange['done'] = true;
    this.pwdchange['progress'] = false;})
  }

  deleteaccount(){
    this.api.deleteuser(this.userdetails.email,this.deleterequest.pwd).subscribe(
      data => {
        //this.deleteresult="success";
        //localStorage.clear();
        //setTimeout(()=>{this.router.navigate(['/'])},3000);        
      },
      error => {this.deleteresult="error";}
    )
  }
}

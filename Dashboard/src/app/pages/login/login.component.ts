import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service'; 
import {ApiService} from '../../services/api.service' 
import {HttpParams} from '@angular/common/http';  
 
@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.scss'] 
}) 
export class LoginComponent implements OnInit { 
  form: FormGroup 
  constructor( 
    private _api : ApiService, 
    private _auth: AuthService, 
    private router: Router, 
    public fb: FormBuilder 
    
    
  ) { }
  loggedin:boolean; 
  login_pending:boolean;
  loginerror:boolean;


 
  ngOnInit(): void { 
    this.login_pending = false;
    this.form = this.fb.group({ 
      username: ['', Validators.required], 
      password:['', Validators.required] 
    }); 
    if(this._auth.getToken()){this.loggedin=true;}
  } 
 
  login(){
    this.login_pending = true;
    this._auth.login(this.form.value).subscribe(data => {
      setTimeout(()=>{
        this.loggedin=true; 
        this.router.navigate(['/']);
      },750);    
      
    },error => {
      this.loginerror = true;
    });
    this.login_pending = false;
  }
  
  logout(){
    this._auth.logout();    
    this.router.navigate(['/']);
  }
 
}

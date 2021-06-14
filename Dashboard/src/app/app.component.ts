import { HttpParams } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test Dashboard';
  public currentuser : any;
  loginoption = true;
  public loginstatus:boolean;
  public adminstatus:boolean;


  constructor(
    private _auth : AuthService,
    private _api : ApiService    ,
    private router: Router
  ) { }

  ngOnInit() {
    this._auth.currentUser.subscribe(data => {
      if (data){
        this.currentuser = data;
        this.loginstatus = true;
        this.adminstatus = this.currentuser["is_admin"] || this.currentuser["is_superadmin"];      
        setTimeout(()=>{this.autorefreshdata();},0);    
      }
      else {
        this.loginstatus = false;
        this.adminstatus = false;
        setTimeout(()=>{this.autorefreshdata();},0);
      };
           
      }
      );    
      // Refresh Token every 8 Minutes after init.
      setInterval(()=> {this._auth.refreshToken()},1000*60*8);
  }

  public autorefreshdata(){    
    this.updatemetadata().subscribe(
      data => {
        this.setmetadata("metadata",data["data"]);
      });
    this.getsortdata().subscribe(data => {
        this.setmetadata("sortdata",data["datalevels"]);     
        this.setmetadata("geodata",this._api.getValues(data["geodata"],'_id'));        
      });
  }

  logout(){
    this._auth.logout();
    this.autorefreshdata();
    this.loginstatus = false;
    this.adminstatus = false;   
    setTimeout(()=> {this.router.navigate(['/'])},1500)
      };
    
    

  

  getsortdata(){
    return this._api.getTypeRequest("get_sortlevels/"+this._api.REST_API_SERVER_CLIENTID);        
  }

  updatemetadata(){
    let client = this._api.REST_API_SERVER_CLIENTID
    return this._api.getTypeRequest("get_metadata/"+client);          
  }
  


  setmetadata(name,data){
   localStorage.setItem(name,JSON.stringify(data));
  }

}

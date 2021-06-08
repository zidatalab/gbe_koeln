import { HttpParams } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
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
    private _api : ApiService    
  ) { }

  ngOnInit() {
    this.autorefreshdata();
    // Refresh User and Datainfo every 10 Minutes
    let refreshtimer = setInterval(() => this.autorefreshdata(), 1000*60*10); 
    
  }

  autorefreshdata(){
    this._auth.currentUser.subscribe(data => {
      if (data){
        this.currentuser = data;
        this.loginstatus = true;
        this.adminstatus = this.currentuser["is_admin"] || this.currentuser["is_superadmin"];                
      }
      else {
        this.loginstatus = false;
        this.adminstatus = false;
      };
           
      }
      );
    this.updatemetadata().subscribe(
      data => {
        this.setmetadata("metadata",data["data"]);
        this.getsortdata().subscribe(data => {
          this.setmetadata("sortdata",data);     
        });

      }
    
    );

  }

  logout(){
    this._auth.logout();
    this.loginstatus = false;
    this.adminstatus = false;
    this.updatemetadata().subscribe(
      data => {
        this.setmetadata("metadata",data["data"]);
        this.getsortdata().subscribe(data => {
          this.setmetadata("sortdata",data);     
        });

      }
    
    );

  }

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

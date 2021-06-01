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
    this._auth.currentUser.subscribe(data => {
      if (data.data["email"]){
        this.currentuser = data.data;
        this.loginstatus = true;
        this.adminstatus = this.currentuser["is_admin"] || this.currentuser["is_superadmin"];
        console.log(this.currentuser);
      }
      else {
        this.loginstatus = false;
        this.adminstatus = false;
      };
      
      
      }
      )

  }


  logout(){
    this._auth.logout();
    this.loginstatus = false;
    this.adminstatus = false;
  }

}

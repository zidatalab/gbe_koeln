import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private api:ApiService) { }

  users :any;

  ngOnInit(): void {

    this.api.getTypeRequest('users').subscribe(data => {this.users = data;console.log(data);})
  
  }

}

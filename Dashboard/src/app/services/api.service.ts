import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators'; 
import { retry } from 'rxjs/operators';
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
 
 
  public REST_API_SERVER = "http://localhost:8000/" // "https://zidashboardapi.azurewebsites.net/"; 
  public REST_API_SERVER_CLIENTID = "test"; 

  constructor(private httpClient: HttpClient) { } 
 
  getTypeRequest(url) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })).pipe(retry(5)); 
  } 
 
  postTypeRequest(url, payload) { 
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })).pipe(retry(5)); ; 
  } 
 
  putTypeRequest(url, payload) { 
    return this.httpClient.put(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })) 
  }   
}
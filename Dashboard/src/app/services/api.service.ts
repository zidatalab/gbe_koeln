import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http'; 
import { map } from 'rxjs/operators'; 
import { retry } from 'rxjs/operators';
import * as chroma from "chroma-js";

@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
 
 
  public REST_API_SERVER = "http://localhost:8000/" // "https://zidashboardapi.azurewebsites.net/"; 
  public REST_API_SERVER_CLIENTID = "test"; 
  public primarycolor = "#e91e63";

  constructor(private httpClient: HttpClient) { } 
 
  public  getTypeRequest(url) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })).pipe(retry(5)); 
  } 
 
  public  postTypeRequest(url, payload) { 
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })).pipe(retry(3)); ; 
  } 

  
  
// Specific Requests

public updateuser(user,setting,value){
  let payload = {'email' : user,'key':setting,'value':value};
  return this.postTypeRequest('userstatus', payload);
}

public deleteuser(user,password=""){
  let payload = {"email":user};
  if (password!=""){payload["password"]=password};
  return this.postTypeRequest('deleteuser', payload);
}

public changeuserpwd(user,newpwd,oldpwd=""){
  let payload = {"newpassword":newpwd,email:user};
  if (oldpwd!=""){
    payload["oldpassword"]=oldpwd;
  }
  return this.postTypeRequest('changepwd', payload);
}


// Data APIs
public getValues(array, key) {
  let values = [];
  for (let item of array){
    values.push(item[key]);
  }
  return values;
}
public  getKeys(array){
 return Object.keys(array[0]);
}

public  getOptions(array, key){
 return array.map(item => item[key])
 .filter((value, index, self) => self.indexOf(value) === index)
}

public  filterArray(array,key,value){
 let i =0
 let result = []
 for (let item of array){
   if (item[key]==value){result.push(item)};
   i = i+1
 }
 return result
}

public  getmetadata(name){
  return JSON.parse(localStorage.getItem(name));
}
  
public sortArray(array, key, order = "ascending") {
  let result = array;
  if (order == "ascending") {
    return result.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  }
  else {
    return result.sort((a, b) => (a[key] > b[key] ? -1 : 1));
  }



}

public sumArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

public getuniqueValues(array, key) {
  let items = this.getValues(array, key);
  return [...new Set(items)];
}

public makescale(bins=5){
  return chroma.scale([chroma(this.primarycolor).set('hsl.h', -120),this.primarycolor]).colors(bins); }
}
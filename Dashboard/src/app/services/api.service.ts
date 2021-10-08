import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http'; 
import { map } from 'rxjs/operators'; 
import { retry,timeout } from 'rxjs/operators';
import * as chroma from "chroma-js";

@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
 
 
  public REST_API_SERVER = "https://zidashboardapi.azurewebsites.net/" ; // "https://zidashboardapi.azurewebsites.net/";//"http://localhost:8000/" ; // 
  public REST_API_SERVER_CLIENTID = "2021_06_gbe_koeln"; 
  public primarycolor = "e1141c"; // "#e91e63";
  public accentcolor = "3714e1";
  public warncolor = "e1149b";
  
  constructor(private httpClient: HttpClient) { } 
 
  public  getTypeRequest(url) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })).pipe(timeout(3500),retry(5)); 
  } 
 
  public  postTypeRequest(url, payload) { 
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })).pipe(timeout(1500),retry(3)); ; 
  } 

  public  getTypeRequestnotimeout(url) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })).pipe(retry(1)); 
  } 
 
  public  postTypeRequestnotimeout(url, payload) { 
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })).pipe(retry(1)); ; 
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

public  filterNAArray(array,key){
  let i =0
  let result = []
  for (let item of array){
    if (item[key] && (item[key]!==null) && (!isNaN(item[key]))){
      result.push(item)};
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

  public shuffle(array) {
    const a = array;
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  public stringwrap(string,maxlength=30){
    let newstring = "";
    let wordsarray = string.split(" ");
    let fulllength = string.length
    let linelength = 0
    for (let word of wordsarray){
      let wordlen = word.length;
      if ((linelength+wordlen)<maxlength){
        newstring = newstring + " " + word;
        linelength = linelength+wordlen;
      }
      else {
        newstring = newstring + "<br>" + word;
        linelength = wordlen;
      };    
    }
    return newstring;
  }

}


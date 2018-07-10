import { Injectable } from '@angular/core';
import { Http ,Response ,Headers, RequestOptions } from '@angular/http';
import{ Observable }   from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import{User}  from '../user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {

  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers ({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user:User;

  constructor(private _http : Http ) { }

  getItems() {
    return  this._http.get(this.baseUrl+'/items',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getItem(id:Number){

    return this._http.get(this.baseUrl+'/item/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteItem(id:Number){

    return this._http.delete(this.baseUrl+'/item/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }


  addItem(user:User){

    return this._http.post(this.baseUrl+'/items',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
  saveOrUpdateItem(user:User){

    return this._http.put(this.baseUrl+'/item',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }

  setter(user:User) {
    this.user=user;
  }
   getter() {
   return this.user;
  }

}

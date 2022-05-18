import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

export interface UserRepoModel {
  login: string;
  name: string; 
  avatar_url: string; 
  repos_url: string; 
  bio: string; 
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersearchService {
  
  constructor(private http:HttpClient) { }

  getUserData(searchUquery: string) :Observable<UserRepoModel> { 
    return this.http.get<UserRepoModel>("https://api.github.com/users/" + searchUquery) //.pipe(map(result => result));
    //let jType: Array<Object> = Object.entries(jtype);
    //return jType;
  }
}
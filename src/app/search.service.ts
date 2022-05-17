import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { SearchBarComponent } from './search-bar/search-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http:HttpClient) { }

  getData():Observable<any> {

    const url = "https://api.github.com/search/repositories";

    return this.http.get("https://api.github.com/search/repositories" + "?q=" + SearchBarComponent.searchquery)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

export interface RepoModel {
  full_name: string;
  description: string; 
  topics: Array<string>; 
  stargazers_count: number; 
  language: string; 
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http:HttpClient) { }

  getData(searchquery: string) :Observable<RepoModel[]> { 
    const jsonType = this.http.get("https://api.github.com/search/repositories" + "?q=" + searchquery);
    return this.http.get<{items: RepoModel[]}>("https://api.github.com/search/repositories" + "?q=" + searchquery).pipe(map(result => result.items));
  }
}


//.pipe(map((response: any) => response.json()));
    //console.log("HEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYY");
    //console.log(jsonType);
    //return jsonType;
    //const jT = this.http.get<RepoModel[]>("https://api.github.com/search/repositories" + "?q=" + searchquery).pipe(map(categories =>
                    //categories.map(({ fname, desc, topics, stars, lang, updated }) => ({ fname, desc, topics, stars, lang, updated }));
                //)
            //).subscribe;
    //console.log(jT);
    //return jsonType;
    //return jT;
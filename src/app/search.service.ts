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
export class SearchService {
  
  constructor(private http:HttpClient) { }

  getRepoData(searchquery: string[]) :Observable<RepoModel[]> { 
    const jsonType = this.http.get("https://api.github.com/search/repositories" + "?q=" + searchquery);
    let searchUrl = "https://api.github.com/search/repositories" + "?q=" + searchquery[0]
    for (let i = 1; i < searchquery.length; i++) {
      searchUrl = searchUrl + " " + searchquery[i];
    }
    return this.http.get<{items: RepoModel[]}>(searchUrl).pipe(map(result => result.items));
  }

  getUserData(searchUquery: string) :Observable<UserRepoModel> { 
    return this.http.get<UserRepoModel>("https://api.github.com/users/" + searchUquery);
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
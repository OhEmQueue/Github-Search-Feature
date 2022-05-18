//import { Component, OnInit } from '@angular/core';

//@Component({
  //selector: 'app-user-search-bar',
  //templateUrl: './user-search-bar.component.html',
  //styleUrls: ['./user-search-bar.component.css']
//})
///export class UserSearchBarComponent implements OnInit {

 // constructor() { }

  //ngOnInit(): void {
  //}

//}

import { Component } from '@angular/core';
import { UserRepoModel, UsersearchService } from '../usersearch.service';


@Component({
  selector: 'app-user-search-bar',
  templateUrl: './user-search-bar.component.html',
  styleUrls: ['./user-search-bar.component.css']
})

export class UserSearchBarComponent {
  public searchUquery: string = '';
  public searchUResults: UserRepoModel[] = [];
  constructor(private usersearchService:UsersearchService) { }

  getUserRepos() {
    this.usersearchService.getUserData(this.searchUquery).subscribe((results: UserRepoModel[]) => {
      console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
      console.log(results)
      this.searchUResults = results
      console.log("BYE")
      console.log(this.searchUResults)
    })
  }
}

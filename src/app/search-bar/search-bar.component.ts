import { Component } from '@angular/core';
import { RepoModel, SearchService } from '../search.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  public searchquery: string = '';
  public searchResults: RepoModel[] = [];
  constructor(private searchService:SearchService) { }

  getRepos() {
    this.searchService.getData(this.searchquery).subscribe((results: RepoModel[]) => {
      console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
      console.log(results)
      this.searchResults = results
      console.log("BYE")
      console.log(this.searchResults)
    })
  }
}

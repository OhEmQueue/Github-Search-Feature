import { Component } from '@angular/core';
import {SearchService} from './search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-feature';
  
  constructor(private searchService:SearchService){}

  getRepos() {
    this.searchService.getData().subscribe((data) => {
      console.log(data)
    })
  }
}

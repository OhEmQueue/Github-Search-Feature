import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RepoModel, SearchService } from '../search.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Term {
  name: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent  implements OnInit, OnDestroy {
  public searchquery: string = '';
  public searchResults: RepoModel[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<RepoModel> = new MatTableDataSource<RepoModel>(this.searchResults);
  
  constructor(private searchService:SearchService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  terms: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.terms.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(term: string): void {
    const index = this.terms.indexOf(term);

    if (index >= 0) {
      this.terms.splice(index, 1);
    }
  }
  getRepos() {
    this.searchService.getRepoData(this.terms).subscribe((results: RepoModel[]) => {
      console.log(results)
      this.searchResults = results
      console.log(this.searchResults)
    })
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
//import { AppRoutingModule } from './app-routing,module';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { AppRoutingModule } from './app-routing.module';
import { UserSearchBarComponent } from './user-search-bar/user-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBarComponent,
    UserSearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserSearchBarComponent } from './user-search-bar/user-search-bar.component';

const routes: Routes = [
  { path: 'repos', component: SearchBarComponent },
  { path: 'users', component: UserSearchBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
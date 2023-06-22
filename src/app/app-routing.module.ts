import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetflixHomeComponent } from './netflix-home/netflix-home.component';

const routes: Routes = [{ 
  path: 'home', component: NetflixHomeComponent },
{ path: '',   redirectTo: '/home', pathMatch: 'full'},
// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

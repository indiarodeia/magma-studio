import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MusicComponent } from './music/music.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'music', component: MusicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

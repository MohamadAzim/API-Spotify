import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumDetailsComponent} from './album-details/album-details.component';

const routes: Routes = [
      {path: '' , component: SearchComponent },
      {path: 'artist/:id' , component: ArtistComponent },
      {path: 'album/:id' , component: AlbumDetailsComponent },
      {path:'about',component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

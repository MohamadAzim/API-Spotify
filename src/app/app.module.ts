import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { SearchComponent } from "./search/search.component";
import { SpotifyService } from "./spotify.service";
import { ResultBoxComponent } from "src/components/result-box/result-box.component";
import { ArtistComponent } from "./artist/artist.component";
import { AlbumDetailsComponent } from "./album-details/album-details.component";
import { AlbumBoxComponent } from "../components/album-box/album-box.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ResultBoxComponent,
    ArtistComponent,
    AlbumDetailsComponent,
    AlbumBoxComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
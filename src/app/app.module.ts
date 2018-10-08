import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { ArtistComponent } from './components/artist/artist.component';
// import { LastFmService } from './services/last-fm.service';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';
import { VideoComponent } from './components/video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    ArtistComponent,
    SearchArtistComponent,
    VideoComponent,   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

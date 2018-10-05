import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { ArtistComponent } from './components/artist/artist.component';
import { LastFmService } from './services/last-fm.service';
@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    ArtistComponent,   
  ],
  imports: [
    BrowserModule,
    HttpClientModule   
  ],
  providers: [LastFmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

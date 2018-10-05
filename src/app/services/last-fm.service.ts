import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Artist } from '../artist';
@Injectable({
  providedIn: 'root'
})
export class LastFmService {

  constructor(
    private HTTP: HttpClient,
   
  ) { }
  private artistUrl = 'api/artists'
  getTracksAPI(nameArtist) {
    const UrlTracks = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${nameArtist}&api_key=ffc3e086ff0216f42bf64c29b2d6db65&format=json`;
    return this.HTTP.get(UrlTracks , { observe: 'response' });
  }

  getArtistAPI (nameArtist) {
    const urlArtist = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${nameArtist}&api_key=ffc3e086ff0216f42bf64c29b2d6db65&format=json`;
    console.log(urlArtist)
    return this.HTTP.get(urlArtist, { observe: 'response' });
  }
}

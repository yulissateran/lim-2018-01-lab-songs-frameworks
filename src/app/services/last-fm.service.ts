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
  getDataAPI(nameArtist, typeRequest) {
    const Url= `https://ws.audioscrobbler.com/2.0/?method=artist.${typeRequest}&artist=${nameArtist}&autocorrect=1&api_key=ffc3e086ff0216f42bf64c29b2d6db65&format=json`;
    return this.HTTP.get(Url, { observe: 'response' });
  }
 
  getVideo(query){
    return this.HTTP.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyDakMcm-JaTerQmzKCwIg142mwboT7NlK4&part=snippet`)
  }
   

}

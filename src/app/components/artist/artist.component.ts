import { Component, OnInit } from '@angular/core';

import { LastFmService } from '../../services/last-fm.service';
import { LocalApiService } from '../../services/local-api/local-api.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  constructor(
    private api: LocalApiService,
    private lastFm: LastFmService,
  ) {
    this.namesArtists = this.api.data();
    this.getArtistWithTracks(this.idArtist);
  }
  public namesArtists: any;
  public idArtist: number = 0;
  public infoArtist: any = {};
  public name: string;
  public img: string;
  public toptracks: any = {};
  public rankingTracks: any;
  public ranking: any;

  ngOnInit() {
  }
  getArtistWithTracks(id) {
    const nameArtist = this.namesArtists[id].name;
    this.lastFm.getDataAPI(nameArtist, 'getinfo').subscribe((data) => {
      this.name = data.body['artist']['name'];
      this.img = data.body['artist']['image'][4]['#text'] || 'https://www.elnuevosiglo.com.co/sites/default/files/styles/noticia_interna/public/2018-03/03bjf1-marzo29.jpg?itok=ziqQIuVG';

    });
    this.lastFm.getDataAPI(nameArtist, 'gettoptracks').subscribe((data) => {
      this.toptracks = data.body['toptracks'].track;
      const Trackcs = this.toptracks.slice(0, 11)
      this.rankingTracks = Trackcs.map((item, index) => {
        const query = `${item.artist.name} ${item.name}`;
        this.lastFm.getVideo(query).subscribe(data => {
          const idVideo = data['items'][0]['id']['videoId'];
          item.urlVideo = `https://www.youtube.com/embed/${idVideo}?enablejsapi=1&origin=http://localhost:4200/`;
        });
        item.id = index;
        item.likes = 0;
        return item;
      });
      console.log(this.rankingTracks)
    });
  }

  nextArtist() {
    this.idArtist < 5 ? this.idArtist++ : this.idArtist = 0;
    this.getArtistWithTracks(this.idArtist)
  }

  previewArtist() {
    this.idArtist > 0 ? this.idArtist-- : this.idArtist = 5;
    this.getArtistWithTracks(this.idArtist)
  }

  sortSongs() {
    this.rankingTracks.sort((a, b) => {
      if (a.likes < b.likes) return 1;
      if (a.likes > b.likes) return -1;
      return 0;
    });
  }

  like(id) {
    this.rankingTracks.map((elem) => elem.id === id ? elem.likes++ : elem.likes), this.sortSongs();
  }

  notLike(id) {
    this.rankingTracks.map((elem) => elem.id === id && elem.likes > 0 ? elem.likes-- : elem.likes), this.sortSongs()
  }

  searchArtist(artist) {
    this.lastFm.getDataAPI(artist, 'gettoptracks').subscribe((data) => {
      this.toptracks = data.body['toptracks'].track;
      const Trackcs = this.toptracks.slice(0, 11);
      this.rankingTracks = Trackcs.map((item, index) => {
        const query = `${item.artist.name} ${item.name}`;
        this.lastFm.getVideo(query).subscribe(data => {
          const idVideo = data['items'][0]['id']['videoId'];
          item.urlVideo = `https://www.youtube.com/embed/${idVideo}?enablejsapi=1&origin=https://yulissateran.github.io/`;
        });
        item.id = index;
        item.likes = 0;
        return item;
      });
      console.log(this.rankingTracks)
    })
    this.lastFm.getDataAPI(artist, 'getinfo').subscribe((data) => {
      this.img = data.body['artist']['image'][4]['#text'] || 'https://www.elnuevosiglo.com.co/sites/default/files/styles/noticia_interna/public/2018-03/03bjf1-marzo29.jpg?itok=ziqQIuVG';
      this.name = data.body['artist']['name'];
    });
  }
}

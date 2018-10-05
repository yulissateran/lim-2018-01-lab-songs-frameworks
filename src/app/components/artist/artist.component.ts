import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../services/last-fm.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public namesArtists = [
    { id: 0, name: 'Rihana' },
    { id: 1, name: 'Shakira' },
    { id: 2, name: 'Thalía' },
    { id: 3, name: 'Cher' },
    { id: 4, name: 'Reik' },
    { id: 5, name: 'HaAsh' }
  ];
  public idArtist: number = 0;
  public infoArtist: any = {};
  public name: string;
  public img: string;
  public toptracks: any = {};
  public rankingTracks:any;
  public ranking: any;

  constructor(
    private lastFm: LastFmService,
  ) {
     this.getArtistWithTracks(this.idArtist);
  }

  ngOnInit() {
  }
  getArtistWithTracks(id) {    
    const nameArtist = this.namesArtists[id].name;
    this.lastFm.getArtistAPI(nameArtist).subscribe((data) => {
      this.infoArtist = { ...data },
      console.log(this.infoArtist)
      this.name = data.body['artist']['name'];
      this.img = data.body['artist']['image'][3]['#text'] ||'https://www.elnuevosiglo.com.co/sites/default/files/styles/noticia_interna/public/2018-03/03bjf1-marzo29.jpg?itok=ziqQIuVG';
      console.log(this.img)
    });
     this.lastFm.getTracksAPI(nameArtist).subscribe((data) => {
          this.toptracks =  data.body['toptracks'].track ;        
          const Trackcs = this.toptracks.slice(0,11)
          this.rankingTracks= Trackcs.map((item,index)=>{
            item.id= index;
            item.likes= 0;
            return item;
          })
     });
  } 
   nextArtist() {
    this.idArtist < 5? this.idArtist++ : this.idArtist = 0;
    this.getArtistWithTracks(this.idArtist)
    console.log(this.idArtist)
  } 
  previewArtist() {
    this.idArtist > 0? this.idArtist-- : this.idArtist = 5;
    this.getArtistWithTracks(this.idArtist)
  }
  like(id){
    console.log('like', id)
    this.rankingTracks.map((elem)=> elem.id === id? elem.likes++: elem.likes),
    this.rankingTracks.sort((a, b) => {
      if (a.likes > b.likes) {
        return 1;
      }
      if (a.likes < b.likes) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }).reverse();
  }
  notLike (id) {
    console.log('nolike', id)
    this.rankingTracks.map((elem)=> elem.id === id? elem.likes--: elem.likes),
    this.rankingTracks.sort((a, b) => {
      if (a.likes > b.likes) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }  else
      return 0;
    }).reverse();
  }
}

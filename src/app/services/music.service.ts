import { Injectable } from '@angular/core';
import { Music } from '../model/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  Musics = [

    new Music(1, 'Simon R & Jordana - Colorful love.mp3', 'Colorful Love', 'Simon R',
      'Deep House', 3.5, '04-04-2018', 'Jordana', 'Magma Recordings 2018', null, false, null),
    new Music(2, 'Simon.R - Chill out Charlie.mp3', 'Chill Out Charlie', 'Simon R',
      'House', 3.5, '06-01-2018', null, 'Magma Recordings 2018', null, false, null),

  ];


  private musics = this.Musics;

  constructor() { }

  getMusics(): Music[] {
    return this.musics;
  }
  /*
    getTitle(): Musics[] {

      return this.Musics.title;

    } */

  /*  playMusic(): Music[] {
     return this.Musics play();
   } */

  /*  load(url) {
     this.music.src = this.musicService.prepareUrl(url);
     this.audio.load();
   }

   play(url) {
     this.load(url);
     this.audio.play()
   } */
}



import { Injectable } from '@angular/core';
import { Music } from '../model/music';
import { MusicPlayerComponent } from '../components/music-player/music-player.component';
import { MusicListComponent } from '../music/music-list/music-list.component';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private musics: Music[] = [

    new Music('../../assets/musics/Simon.R_Jordana-Colorful_love.mp3', 'Colorful Love', 'Simon R',
      'Deep House', 3.5, '04-04-2018', 'Jordana', 'Magma Recordings 2018', null, false, null),
    new Music('../../assets/musics/Simon.R-Chill_out_Charlie.mp3', 'Chill Out Charlie', 'Simon R',
      'House', 3.5, '06-01-2018', null, 'Magma Recordings 2018', null, false, null)

  ];

  private music: Music;

  constructor() {
  }

   getMusicByIndex(musicIndex: number): Music {
    this.music = this.musics[musicIndex];
    return this.music;
  }

  getMusics(): Music[] {
    return this.musics;
  }

  getNumberOfMusics(): number {
    return this.musics.length;
  }


}



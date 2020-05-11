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
      'House', 3.5, '06-01-2018', null, 'Magma Recordings 2018', null, false, null),
    new Music('../../assets/musics/Simon.R_Bonz0_Jordana-Hypnotized.mp3', 'Hypnotized', 'Magma',
      'Deep-House', 3.44, '02-12-2017', 'Jordana', 'Magma Recordings 2017', null, false, null),
    new Music('../../assets/musics/Simon.R_Jordana_River.mp3', 'River', 'Simon R',
      'Deep-House', 3.03, '20-10-2017', 'Jordana', 'Magma Recordings 2017', null, false, null),
    new Music('../../assets/musics/Simon.R_Bonz0-Too_Much.mp3', 'Too Much', 'Simon R',
      'Techno', 1.31, '08-12-2017', 'Bonz0', 'Magma Recordings 2017', null, false, null),
    new Music('../../assets/musics/Simon.R_Jordana-Down.mp3', 'Down', 'Simon R',
      'Chill Out', 3.25, '06-01-2018', 'Jordana', 'Magma Recordings 2018', null, false, null),
    new Music('../../assets/musics/Simon.R_Jordana-Say_my_Name.mp3', 'Say My Name', 'Simon R',
      'Deep-House', 4.07, '03-12-2017', 'Jordana', 'Magma Recordings 2017', null, false, null),
    new Music('../../assets/musics/Simon.R-Jordana-Born_the_Same.mp3', 'Born the Same', 'Simon R',
      'Deep-House', 5.23, '30-12-2017', 'Jordana', 'Magma Recordings 2017', null, false, null),
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



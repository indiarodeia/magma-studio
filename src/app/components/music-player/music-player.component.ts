import { Component, Input } from '@angular/core';
import { SvgNameEnum } from '../../model/enum';
import { MusicService } from 'src/app/services/music.service';
import { Music } from 'src/app/model/music';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {

  constructor(
    private service: MusicService
  ) { }

  get musics(): Music[] {
    return this.service.getMusics();
  }

  SvgNameEnum = SvgNameEnum;

  @Input()
  music: Music;

  /*  const musicarray = this.service.Musics;
   const first = Musics[0];  */

  /* console.log(Musics[1]);*/


  /*  playMusic() {
    return this.musics.map(music: Music)
  }  */


  /*
  playAudio() {
    let audio = new Audio();
    audio.src = this.service.Musics.filename
    audio.load();
    audio.play();
  }
this.playAudio(); */


  /* playMusic(Music) {
    this.music[1] = '../assets/sounds/' + Music + '.mp3';
    Music && (new Audio(Music)).play();
  } */
}
const audio = document.querySelector('#audio');


import { Component, OnInit, ViewChild } from '@angular/core';
import { Music } from 'src/app/model/music';
import { MusicService } from '../services/music.service';
import { MusicPlayerComponent } from '../components/music-player/music-player.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  @ViewChild(MusicPlayerComponent, { static: false }) musicPlayer: MusicPlayerComponent;

  musicIndex: Number;

  constructor(
  ) { }

  ngOnInit() {
  }

  sendMusic(musicIndex: Number): void {
    this.musicIndex = musicIndex;
    this.musicPlayer.loadMusicByIndex(musicIndex);
  }
}

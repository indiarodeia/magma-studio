import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SvgNameEnum } from '../../model/enum';
import { Music } from 'src/app/model/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnDestroy, OnInit {

  SvgNameEnum = SvgNameEnum;

  @Input()
  src: string;

  @Input()
  selectedMusic: Music;

  musicIsPlaying: boolean;
  audio: HTMLAudioElement;
  selectedMusicIndex: number;
  selectedMusicLiked: boolean;

  constructor(
    private service: MusicService
  ) {
    this.audio = new Audio('');
    this.musicIsPlaying = false;
  }

  ngOnInit() {
    this.setInicialMusic();
  }
  ngOnDestroy(): void {
    this.pauseMusic();
  }

  private setInicialMusic(): void {
    this.selectedMusic = this.service.getMusicByIndex(0);
    this.selectedMusicIndex = 0;
    this.audio.src = this.selectedMusic.url; 
  }

  playMusic(): void {
    console.log('music player ' + this.selectedMusic.title);

    if (this.musicIsPlaying === true) {
      this.pauseMusic();
    }

    this.audio.play();
    this.musicIsPlaying = true;
  }

  pauseMusic(): void {
    this.audio.pause();
    this.musicIsPlaying = false;
  }

  nextMusic(): void {

    this.selectedMusicIndex++;

    if (this.selectedMusicIndex <= this.service.getNumberOfMusics() - 1) {
      this.selectedMusic = this.service.getMusicByIndex(this.selectedMusicIndex);

    } else {

      this.selectedMusicIndex = 0;
      this.selectedMusic = this.service.getMusicByIndex(this.selectedMusicIndex);
    }
    this.loadMusicByIndex(this.selectedMusicIndex);
  }

  previousMusic(): void {

    this.selectedMusicIndex--;

    if (this.selectedMusicIndex === 0) {
      this.selectedMusic = this.service.getMusicByIndex(this.selectedMusicIndex);

    } else {

      this.selectedMusicIndex = this.service.getNumberOfMusics() - 1;
      this.selectedMusic = this.service.getMusicByIndex(this.selectedMusicIndex);
    }
    this.loadMusicByIndex(this.selectedMusicIndex);
  }

  likeMusic(): boolean {

    if (this.selectedMusic.liked === false) {
      return this.selectedMusicLiked = true;
    } else {
    }

    console.log(this.selectedMusicLiked);
  }

  dislikeMusic(): boolean {
    if (this.selectedMusicLiked === true) {
      return this.selectedMusicLiked = false;

    }

    console.log(this.selectedMusicLiked);
  }

  loadMusicByIndex(musicIndex): void {
    this.selectedMusicIndex = musicIndex;
    this.selectedMusic = this.service.getMusicByIndex(musicIndex);
    this.audio.src = this.selectedMusic.url;

    this.playMusic();

  }
  setSelectedMusic(music: Music): void {
    this.selectedMusic = music;
  }
}

import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
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

  @ViewChild('progressContainer', { static: true }) progressContainer: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar: ElementRef;
  @ViewChild('audioEl', { static: false }) audioEl: ElementRef;

  @Input()
  src: string;

  @Input()
  selectedMusic: Music;

  musicIsPlaying: boolean;
  audio: HTMLAudioElement;
  selectedMusicIndex: number;
  musicIsLiked: boolean;
  musicIsMute: boolean;
  suffledIndex: number;
  repeatMode: boolean;
  nextMusicIndex: number;
  progress: any;
  width: number;
  audioProgress: number;
  clickWidth: number;


  constructor(
    private service: MusicService
  ) {
    this.audio = new Audio('');
    this.musicIsPlaying = false;
    this.repeatMode = false;
  }

  ngOnInit() {
    this.setInicialMusic();
    this.width = this.progressContainer.nativeElement.clientWidth;
  }

  ngOnDestroy(): void {
    this.pauseMusic();
  }

  private setInicialMusic(): void {
    this.selectedMusic = this.service.getMusicByIndex(0);
    this.selectedMusicIndex = 0;
    this.audio.src = this.selectedMusic.url;

  }

  loadMusicByIndex(musicIndex): void {
    this.selectedMusicIndex = musicIndex;
    this.selectedMusic = this.service.getMusicByIndex(musicIndex);
    this.audio.src = this.selectedMusic.url;
    this.musicIsLiked = this.selectedMusic.liked;

    this.playMusic();

  }
  setSelectedMusic(music: Music): void {
    this.selectedMusic = music;
  }

  playMusic(): void {
    if (this.musicIsPlaying === true) {
      this.pauseMusic();
    }

    this.audio.play();
    this.audio.volume = 1;
    this.musicIsMute = false;
    this.musicIsPlaying = true;
  }

  pauseMusic(): void {
    this.audio.pause();
    this.musicIsPlaying = false;
  }

  nextMusic(): void {

    this.nextMusicIndex = this.selectedMusicIndex++;

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
      this.selectedMusicIndex = this.service.getNumberOfMusics() - 1;
      this.selectedMusic = this.service.getMusicByIndex(this.selectedMusicIndex);

    } else {
      this.selectedMusic = this.service.getMusicByIndex(0);
    }
    this.loadMusicByIndex(this.selectedMusicIndex);
  }

  likeMusic(): void {
    this.selectedMusic.liked = !this.selectedMusic.liked;
    this.musicIsLiked = !this.musicIsLiked;
  }

  muteMusic(): void {
    if (this.audio.volume > 0 && this.musicIsPlaying) {
      this.audio.volume = 0;
      this.musicIsMute = true;

    } else {
      this.musicIsMute = false;
      this.audio.volume = 1;
    }
  }

  suffleMusic(): void {
    this.suffledIndex = Math.floor(Math.random() *
      this.service.getNumberOfMusics());

    this.loadMusicByIndex(this.suffledIndex);
  }

  repeatMusic(): void {
    this.repeatMode = !this.repeatMode;

    if (this.repeatMode === true) {
      this.nextMusicIndex = this.selectedMusicIndex;
      this.audio.play();
    }
  }

  setProgressBar(event): void {
    this.clickWidth = event.offsetX;
    this.audio.currentTime = (this.clickWidth / this.width) * this.audio.duration;
   // this.progressBar.style.width = ((this.audio.currentTime * 100 / this.audio.duration) + '%');

    // this.updateProgressBar();
  }

  /*   updateProgressBar(): void {
      this.audioProgress = (this.audio.currentTime / this.audio.duration) * 100;
      this.progressContainer.width = `{this.audioProgress}%`;
      }
  */
}

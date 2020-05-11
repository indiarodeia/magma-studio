import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SvgNameEnum } from 'src/app/model/enum';
import { MusicService } from 'src/app/services/music.service';
import { Music } from 'src/app/model/music';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  SvgNameEnum = SvgNameEnum;

  availableMusics: Music[];
  isOnListView: boolean;

  @Output()
  musicClicked = new EventEmitter<number>();

  constructor(
    private service: MusicService
  ) {
    this.availableMusics = this.service.getMusics();
    this.isOnListView = true;
  }


  ngOnInit() {
  }

  setMusicByIndex(musicIndex: number): void {
    this.musicClicked.emit(musicIndex);
  }

  toggleListGridView(): void {
    this.isOnListView = !this.isOnListView;
  }

  getMusicLiked(musicIndex): boolean {
    return this.service.getMusicByIndex(musicIndex).liked;
  }
}

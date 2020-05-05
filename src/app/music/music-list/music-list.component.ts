import { Component, OnInit } from '@angular/core';
import { SvgNameEnum } from 'src/app/model/enum';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  SvgNameEnum = SvgNameEnum;

  constructor() { }

  ngOnInit() {
  }

}

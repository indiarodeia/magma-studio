import { Component, OnInit, Input } from '@angular/core';
import { SvgNameEnum } from 'src/app/model/enum';

@Component({
  selector: 'app-my-svgs',
  templateUrl: './my-svgs.component.html',
  styleUrls: ['./my-svgs.component.scss'],
})
export class MySvgsComponent implements OnInit {
  @Input() svgName: SvgNameEnum;
  @Input() width: string;
  @Input() height: string;

  SvgNameEnum = SvgNameEnum;

  constructor() { }

  ngOnInit() { }
}

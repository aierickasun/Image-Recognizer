import { Component, OnInit, Input } from '@angular/core';
import { ImageSnippet } from '../image-snippet';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  @Input() selectedFile: ImageSnippet;

  constructor() { }

  ngOnInit() {
  }

}

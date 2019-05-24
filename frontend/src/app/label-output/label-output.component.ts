import { Component, OnInit, Input } from '@angular/core';
import { ClassifierService } from '../classifier.service';
import { Label } from '../label';

@Component({
  selector: 'app-label-output',
  templateUrl: './label-output.component.html',
  styleUrls: ['./label-output.component.scss']
})
export class LabelOutputComponent implements OnInit {

  @Input() btnStatus: boolean = false;
  @Input() outputLabels: string;

  labels: Label[];

  constructor( private classifierService: ClassifierService ) { }

  ngOnInit() {
  }

  handleClick( event: Event ) {
    console.log('classify click!');
    this.classifyImage();
  }

  classifyImage(): void {
    // this.classifierService.
  }

}

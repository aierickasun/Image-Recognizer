import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input-display',
  templateUrl: './user-input-display.component.html',
  styleUrls: ['./user-input-display.component.css']
})
export class UserInputDisplayComponent implements OnInit {

  @Output() retrievedEvent2 = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  passEvent( label:string ) {
    console.log("pass event");
    this.retrievedEvent2.emit( label );
  }

}

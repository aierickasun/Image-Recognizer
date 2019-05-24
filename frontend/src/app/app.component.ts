import { Component } from '@angular/core';
import { Label } from './label';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventPayload: string;

  public cards: Array<any> = [
    {text: 'Card 1'},
    {text: 'Card 2'},
    {text: 'Card 3'},
    {text: 'Card 4'},
    {text: 'Card 5'},
    {text: 'Card 6'},
    {text: 'Card 7'},
    {text: 'Card 8'},
    {text: 'Card 9'},
    {text: 'Card 10'},
  ];
  addCard(cardText: string) {
    this.cards.push({text: cardText});
  }

  notifyLabelOutput( label: string ) {
    this.eventPayload = label;
    console.log(label);
  }
}

import { Component, Input } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() title:string = '';

opened:boolean = true;

faArrowDown = faArrowDown;
faArrowRight = faArrowRight;
}

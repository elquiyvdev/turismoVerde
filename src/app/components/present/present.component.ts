import { Component, Input } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';

@Component({
  selector: 'app-present',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './present.component.html',
  styleUrl: './present.component.css'
})
export class PresentComponent {

  @Input() title! : string;
  @Input() describe! : string;
  @Input() image! : string;

}

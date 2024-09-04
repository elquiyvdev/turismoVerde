import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from '../components/carrusel/carrusel.component';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
    window.scrollTo(0, 0);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { PresentComponent } from '../components/present/present.component';
import { HotelsService } from '../hotels.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule,PresentComponent, HttpClientModule],
  providers: [HotelsService],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{

  hotels!: Observable<{
    id: number;
    nombre: string;
    descripcion: string;
    entrada: string;
    salida: string;
    contacto: string;
    ubicacion: string;
    habitaciones: {
      Simple: string;
      Doble: string;
      Suite: string;
    };
  }[]>;

  constructor(private hotelsService: HotelsService){
  }

  ngOnInit(){
    this.hotels = this.hotelsService.getHoteles();
    window.scrollTo(0,0)
  }

  title = "Mejores hoteles de Mollendo"
  descripcion = "En calidad y precio"
  image = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479389791.jpg?k=476cb8e0cfd9cef3bca15d728aa0ecfba0f9b5f8d8be5d45e098605048d07041&o=&hp=1"
}

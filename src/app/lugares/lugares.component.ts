import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Observable } from 'rxjs';
import { LugaresService } from '../lugares.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lugares',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink], // Asegúrate de importar CommonModule y HttpClientModule
  providers: [LugaresService], // Proporciona el servicio aquí si no lo has hecho en otro lugar
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  lugaresTuristicos!: Observable<{
    nombre: string;
    descripcion: string;
    images: string;
    slug: string;
    recorrido: string;
    guiaturistico: {
      nombre: string;
      contacto: string;
      email: string;
      photo: string;
    } | void;
    horariosTour: string[];
    fechasDisponibles: string;
  }[]>;

  constructor(private lugaresService: LugaresService, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.lugaresTuristicos = this.lugaresService.getLugaresTuristicos();
    window.scrollTo(0,0)
  }

  scrollToSection(): void {
    this.viewportScroller.scrollToAnchor('lugares');
  }
}

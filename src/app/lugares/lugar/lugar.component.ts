import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { CommonModule, ViewportScroller } from '@angular/common';
import { PresentComponent } from '../../components/present/present.component';
import { LugaresService } from '../../lugares.service';

@Component({
  selector: 'app-lugar',
  standalone: true,  // Asegúrate de que esté en modo standalone
  imports: [CommonModule, HttpClientModule, PresentComponent],  // Asegúrate de importar HttpClientModule aquí
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css'],
  providers: [LugaresService]  // Incluye tu servicio aquí si es necesario
})
export class LugarComponent implements OnInit{
  lugar: {
    nombre: string;
    descripcion: string;
    historia: string;
    images: string;
    slug: string;
    recorrido: string;
    precio: string;
    recomendaciones: string[];
    guiaturistico: {
      nombre: string;
      contacto: string;
      email: string;
      photo: string;
      info: string;
    };
    horariosTour: string[];
    fechasDisponibles: string;
    imagenruta: string;
  } | undefined;
  activeSection: string = 'historia';  // Por defecto, se muestra la sección de "Economía"

  
  constructor(
    private route: ActivatedRoute,
    private placeService: LugaresService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('place');
      if (slug) {
        this.getLugarBySlug(slug);
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.route.fragment.subscribe((fragment) => {
        console.log('Fragment detected:', fragment); // Para depurar
        if (fragment) {
          // Desplazarse al fragmento si está presente
          this.viewportScroller.scrollToAnchor(fragment);
        } else {
          // Desplazarse al principio si no hay fragmento
          console.log('No fragment, scrolling to top.');
          window.scrollTo(0, 0);
        }
      });
    }, 100); // Pequeño retraso para asegurarnos de que todo esté cargado
  }

  getLugarBySlug(slug: string): void {
    this.placeService.getLugarBySlug(slug).subscribe(lugar => {
      if (lugar) {
        this.lugar = lugar;
      }
    });
  }

  showContent(section: string): void {
    this.activeSection = section;
  }
}
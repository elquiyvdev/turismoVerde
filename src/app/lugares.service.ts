import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private http: HttpClient) { }

  getLugaresTuristicos(): Observable<{
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
  }[]> {
    // Accede al JSON usando la ruta relativa desde el servidor
    return this.http.get<{
      nombre: string;
      descripcion: string;
      historia: string;
      images: string;
      slug: string;
      precio: string;
      recorrido: string;
      guiaturistico: {
        nombre: string;
        contacto: string;
        email: string;
        photo: string;
        info: string;
      };
      recomendaciones: string[];
      horariosTour: string[];
      fechasDisponibles: string;
      imagenruta: string;
    }[]>('/lugares.json');
  }

  getLugarBySlug(slug: string): Observable<{
    nombre: string;
    descripcion: string;
    historia: string;
    images: string;
    slug: string;
    precio: string;
    recorrido: string;
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
  } | undefined> {
    return this.getLugaresTuristicos().pipe(
      map(lugares => lugares.find(lugar => lugar.slug === slug))
    );
  }
}
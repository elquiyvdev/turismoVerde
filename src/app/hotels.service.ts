import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  getHoteles(): Observable<{
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
  }[]> {
    
    return this.http.get<{
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
    }}[]>('/hotels.json');
  }
}

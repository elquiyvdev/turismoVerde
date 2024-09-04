import { Component, OnInit } from '@angular/core';
import { PresentComponent } from '../components/present/present.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PresentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  title = "¿Quieres saber mas?"

  descripcion = "Contactanos en linea o en nuestra sucursal"

  image = "https://images.unsplash.com/photo-1510634047060-93a4747e85c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXphZmF0YSUyMGRlJTIwdnVlbG98ZW58MHx8MHx8fDA%3D"
}

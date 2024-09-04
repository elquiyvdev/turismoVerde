import { Component } from '@angular/core';

import { PresentComponent } from '../components/present/present.component';
import { InfoComponent } from '../components/info/info.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-mollendo',
  standalone: true,
  imports: [PresentComponent,InfoComponent,RouterModule],
  templateUrl: './about-mollendo.component.html',
  styleUrl: './about-mollendo.component.css'
})
export class AboutMollendoComponent {

  title = "Acerca de Mollendo"

  descripcion = "El Puerto Bravo del Perú."

  image = "https://i.ytimg.com/vi/h9cDuaRfPBg/maxresdefault.jpg"

  
}

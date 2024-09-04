import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { PacobotComponent } from './pacobot/pacobot.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, ToolbarComponent, FooterComponent, PacobotComponent, HttpClientModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular';

  ngOnInit(): void {
    initFlowbite();
  }
}

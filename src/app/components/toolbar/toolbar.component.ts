import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterLink, RouterModule], // Solo importa RouterLink y RouterModule
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'], // Usa styleUrls en lugar de styleUrl
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('#header a');

    if (window.pageYOffset > 50) {
      navbar?.classList.add('bg-white', 'shadow-lg');
      navbar?.classList.remove('bg-transparent', 'bg-gradient-to-b', 'from-black/45', 'to-transparent');

      navLinks.forEach(link => {
        link.classList.remove('text-gray-100');
        link.classList.add('text-gray-700');
      });
    } else {
      navbar?.classList.remove('bg-white', 'shadow-lg');
      navbar?.classList.add('bg-transparent', 'bg-gradient-to-b', 'from-black/45', 'to-transparent');

      navLinks.forEach(link => {
        link.classList.remove('text-gray-700');
        link.classList.add('text-gray-100');
      });
    }
  }
}

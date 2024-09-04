import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
  ngOnInit(){
    window.scrollTo(0, 0);
  }
}

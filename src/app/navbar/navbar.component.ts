import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showDragon = false;

  ngOnInit() {
    setTimeout(() => {
      this.showDragon = true;
    }, 1000); // Mostrar el dragón después de 1 segundo
  }
}

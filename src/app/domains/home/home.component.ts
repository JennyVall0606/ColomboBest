import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';  // 👈 AGREGA ESTA LÍNEA

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],  // 👈 AGREGA RouterLink aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  destinos = [
    { nombre: 'Caño Cristales', ubicacion: 'Meta, Col.', imagen: 'assets/cano-cristales.jpg' },
    { nombre: 'Bahía Solano', ubicacion: 'Chocó, Col.', imagen: 'assets/bahia-solano.jpg' },
    { nombre: 'Nuquí', ubicacion: 'Chocó, Col.', imagen: 'assets/nuqui.jpg' }
  ];
}

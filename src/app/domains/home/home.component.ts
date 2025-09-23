import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  // 👈 Importa NgFor y otras directivas comunes
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

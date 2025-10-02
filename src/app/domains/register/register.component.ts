import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  cedula: string = '';  // Campo principal
  fullName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;

  onRegister() {
    // Validar que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validar que aceptó los términos
    if (!this.acceptTerms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    // Validar que la cédula no esté vacía
    if (!this.cedula || this.cedula.trim() === '') {
      alert('El número de cédula es obligatorio');
      return;
    }

    console.log('Registro exitoso:', {
      cedula: this.cedula,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password
    });

    alert('¡Registro exitoso! Tu cédula es tu identificador principal.');
  }
}
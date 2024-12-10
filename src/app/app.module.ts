import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importation de CommonModule pour les directives de base comme ngIf, ngFor
import { FormsModule } from '@angular/forms';   // Importation de FormsModule pour le support des formulaires
import { PaymentComponent } from './payment/payment.component';  // Importation de PaymentComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Définir le composant comme autonome
  imports: [CommonModule, FormsModule, PaymentComponent]  // Ajouter PaymentComponent à imports
})
export class AppComponent {
  title = 'Stripe Payment Example';
}

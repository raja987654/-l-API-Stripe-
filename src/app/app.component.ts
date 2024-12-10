import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';  // Assurez-vous du bon chemin du fichier

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, PaymentComponent]  // Inclure PaymentComponent ici
})
export class AppComponent {
  title = 'Stripe Payment Example';
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: true,  // Définir ce composant comme autonome
})
export class PaymentComponent implements OnInit {
  @ViewChild('cardElement') cardElement!: ElementRef;
  private stripePublicKey = 'pk_test_51QUKvrDbkFD5kvO5w9s7PmVJ7rDpifpylZe3mvvklHYxQWyHLeWWYgMO7FTcMpJYznhATRe5L4APouGsIAB90gJD00PTszg7n9';
  private stripe: any;
  private cardElementStripe: any;

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.stripe = await loadStripe(this.stripePublicKey);

    if (this.stripe) {
      const elements = this.stripe.elements();
      this.cardElementStripe = elements.create('card');
      this.cardElementStripe.mount(this.cardElement.nativeElement);
    }
  }

  async handlePayment(): Promise<void> {
    if (!this.stripe || !this.cardElementStripe) {
      console.error('Stripe not initialized');
      return;
    }

    const { token, error } = await this.stripe.createToken(this.cardElementStripe);

    if (token) {
      console.log('Token généré :', token.id);
      alert('Paiement réussi !');
    } else if (error) {
      console.error('Erreur :', error.message);
      alert('Erreur de paiement : ' + error.message);
    }
  }
}

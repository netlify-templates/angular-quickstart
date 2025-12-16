import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent {
  @Input() label: string = 'Request Quote';
  @Input() buttonSize: string = '';

  onRequestQuote(): void {
    // Hook this up to your contact form / router / tel link, etc.
    console.log('Request Quote clicked');
  }
}

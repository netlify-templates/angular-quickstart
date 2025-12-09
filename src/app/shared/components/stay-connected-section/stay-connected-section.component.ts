import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

interface Perk {
  title: string;
  description: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: 'app-stay-connected-section',
  templateUrl: './stay-connected-section.component.html',
  styleUrls: ['./stay-connected-section.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class StayConnectedSectionComponent {
  subscribeForm: FormGroup;

  perks: Perk[] = [
    {
      title: 'Financing Options',
      description:
        'Flexible payment plans available for major projects. Ask about 0% APR for qualified customers.',
      icon: 'radio_button_unchecked',
    },
    {
      title: 'Seasonal Savings',
      description:
        'Enjoy special discounts on select services during fall and winter. Contact us for current promotions.',
      icon: 'verified',
    },
    {
      title: 'Satisfaction Guarantee',
      description:
        'We stand behind our work with a 100% satisfaction guarantee on all services.',
      icon: 'radio_button_unchecked',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      agree: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    if (this.subscribeForm.invalid) {
      this.subscribeForm.markAllAsTouched();
      return;
    }

    // Hook up to your API or email service here
    console.log('Subscribed:', this.subscribeForm.value);
  }
}

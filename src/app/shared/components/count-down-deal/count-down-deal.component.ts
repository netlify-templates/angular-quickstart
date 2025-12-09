import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  standalone: true,
  selector: 'app-count-down-deal',
  templateUrl: './count-down-deal.component.html',
  styleUrls: ['./count-down-deal.component.scss'],
  imports: [CommonModule, MatButtonModule],
})
export class CountDownDealComponent implements OnInit, OnDestroy {
  // Set your promotion end date here
  targetDate = new Date('2025-12-31T23:59:59');
  timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  private intervalId: any;

  ngOnInit(): void {
    this.calculateTimeLeft();
    this.intervalId = setInterval(() => this.calculateTimeLeft(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private calculateTimeLeft(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      clearInterval(this.intervalId);
      return;
    }

    const secondsTotal = Math.floor(distance / 1000);

    const days = Math.floor(secondsTotal / (60 * 60 * 24));
    const hours = Math.floor((secondsTotal % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
    const seconds = secondsTotal % 60;

    this.timeLeft = { days, hours, minutes, seconds };
  }

  onRequestQuote(): void {
    // Hook this up to your contact form / router / tel link, etc.
    console.log('Request Quote clicked');
  }
}

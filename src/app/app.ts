import { Component, signal } from '@angular/core';
import { Medication, PharmacyService } from './pharmacy-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('Pharmacy');

  medications: Medication[] = [];

  constructor(private pharmacyService: PharmacyService) { }
}

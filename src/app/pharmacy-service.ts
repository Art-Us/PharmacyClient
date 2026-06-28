import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  
}

export interface Medication {
  id: number;
  name: string;
  activeSubstance: string;
  doseMg: number;
  prescriptionRequired: boolean;
  manufacturer: string;
}
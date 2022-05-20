import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data?: any): void {
    if (!data) {
      localStorage.removeItem(key);
      return;
    }
    if (typeof data === 'string') {
      localStorage.setItem(key, data);
      return;
    }
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }
  get(key: string): any {
    const data = localStorage.getItem(key);
    if (!data || typeof data === 'string') {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error getting data from localStorage', error);
      return null;
    }
  }
}

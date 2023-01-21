import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private encryptService: EncryptionService) {}

  public addToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, this.encryptService.encrypt(value));
  }

  public readFromLocalStorage(key: string) {
    let data = localStorage.getItem(key) || '';
    return this.encryptService.decrypt(data);
  }

  public removeFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  public clearFromLocalStorage() {
    localStorage.clear();
  }

  public addToSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, this.encryptService.encrypt(value));
  }

  public readFromSessionStorage(key: string) {
    let data = sessionStorage.getItem(key) || '';
    return this.encryptService.decrypt(data);
  }

  public removeFromSessionStorage(key: string) {
    sessionStorage.removeItem(key);
  }

  public clearFromSessionStorage() {
    sessionStorage.clear();
  }
}

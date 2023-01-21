import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {

  constructor(private constant: ConstantService) {}
  
  public encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.constant.ENCRYPTION_KEY).toString();
  }

  public decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(
      txtToDecrypt,
      this.constant.ENCRYPTION_KEY
    ).toString(CryptoJS.enc.Utf8);
  }
}

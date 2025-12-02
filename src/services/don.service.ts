import { signal, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class DonService {
  /**
   *
   */
  constructor() {
    // this.fairDon(150)
  }

  fairDon(amount: number) {
    let currentAmmount = parseInt(localStorage.getItem('currentAmount')??'0')
    localStorage.setItem('currentAmount', currentAmmount+amount + '');

    console.log(currentAmmount+amount)
  }

  resetCurrentValue() {
    localStorage.setItem('currentAmount', '0');
  }

  DefinirTotalEspererDon(amount: number) {
    localStorage.setItem('totalExpected', amount + '');
  }
}

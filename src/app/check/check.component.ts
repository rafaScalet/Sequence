import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrl: './check.component.css',
})
export class CheckComponent {
  numbers: number[] = [];
  sequence: string = '';
  aux: any;

  set() {
    if (!this.numbers.includes(this.aux)) {
      if (!(this.aux == null)) {
        this.numbers.push(this.aux);
        this.aux = null;
      } else {
        alert('insira um número');
        this.aux = null;
      }
    } else {
      alert('este número já foi inserido');
      this.aux = null;
    }
  }

  order() {
    this.numbers.sort((a, b) => eval(this.sequence));
  }
}

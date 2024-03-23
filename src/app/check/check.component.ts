import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrl: './check.component.css',
})
export class CheckComponent {
  numbers: number[] = [];
  choice: boolean = false
  aux: any;

  set() {
    if (!this.numbers.includes(this.aux)) {
      if (!(this.aux == null)) {
        this.numbers.push(this.aux);
        this.aux = '';
      } else {
        alert('insira um número');
      }
    }else{
      alert('este número já foi inserido')
      this.aux = ''
    }
  }

  order(choice: string = '') {
    this.numbers.sort((a, b) => eval(choice));
  }
}

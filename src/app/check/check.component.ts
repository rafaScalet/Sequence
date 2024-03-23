import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent {
  numbers: number[] = []
  aux: any

  set(){
    this.numbers.push(this.aux)
    this.aux = ''
  }
}

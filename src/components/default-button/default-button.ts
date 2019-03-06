import { Component, Input } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: 'default-button.html'
})
export class DefaultButtonComponent {
  @Input() text;

  constructor() {
    console.log('Hello DefaultButtonComponent Component');
  }
}

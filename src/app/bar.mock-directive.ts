import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appBar]',
  standalone: true,
})
export class BarMockDirective {
  // this throw error
  bar = input({alias: 'appBar'})

  // but this works fine
  // bar = input.required({alias: 'appBar'})

  constructor() {
  }
}

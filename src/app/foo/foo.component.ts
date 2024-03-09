import { Component, input } from '@angular/core';
import { BarDirective } from '../bar.directive';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [
    BarDirective,
  ],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent {
  foo = input.required<number>();
}

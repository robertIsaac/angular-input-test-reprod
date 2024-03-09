import { Directive, effect, input, numberAttribute, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBar]',
  standalone: true
})
export class BarDirective {
  bar = input.required({alias: 'appBar', transform: numberAttribute})

  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef,
  ) {
    effect(() => {
      if (this.bar()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

}

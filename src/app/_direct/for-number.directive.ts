import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForNumber]',
})
export class ForNumberDirective {
  @Input() appForNumber: number = 0;
  constructor(private ele: TemplateRef<any>, private view: ViewContainerRef) {}

  ngOnInit(): void {
    for (let index = 0; index < this.appForNumber; index++) {
      this.view.createEmbeddedView(this.ele);
    }
  }
}

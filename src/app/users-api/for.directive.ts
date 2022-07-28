import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]',
})
export class ForDirective {
  @Input() set appFor(v: number) {
    for (let index = 0; index < v; index++) {
      this.view.createEmbeddedView(this.ele, { index: index });
    }
  }
  constructor(private ele: TemplateRef<any>, private view: ViewContainerRef) {}

  // public set value(v: number) {
  //   for (let index = 0; index < v; index++) {
  //     this.view.createEmbeddedView(this.ele);
  //   }
  // }

  ngOnInit(): void {}
}

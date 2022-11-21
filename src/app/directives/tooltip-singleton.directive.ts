import {
  AfterViewInit,
  ContentChildren,
  Directive,
  QueryList,
} from '@angular/core';
import { createSingleton } from 'tippy.js';
import { TooltipDirective } from './tooltip.directive';

@Directive({
  selector: '[appTooltipSingleton]',
})
export class TooltipSingletonDirective implements AfterViewInit {
  @ContentChildren(TooltipDirective, {
    descendants: true,
  })
  elementsWithTooltips!: QueryList<TooltipDirective>;
  constructor() {}

  ngAfterViewInit(): void {
    createSingleton(this.getTippyInstances(), {
      delay: 200,
      moveTransition: 'transform 0.2s ease-out',
    });
  }

  getTippyInstances() {
    return this.elementsWithTooltips.toArray().map((t) => t.tippyInstance);
  }
}

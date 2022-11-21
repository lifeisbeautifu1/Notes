import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements AfterViewInit {
  @Input('appTooltip') tooltipContent!: string;

  public tippyInstance: any;
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent,
    });
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverPost]',
  standalone: true
})
export class HoverPostDirective {

  @Input() hoverColor: "grey" | "black" = "black";

  constructor(private elementRef: ElementRef) { }

  @HostListener("mouseover")
  onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = this.hoverColor;
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = "initial";
  }
}

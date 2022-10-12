import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransition]'
})
export class TransitionDirective {

  @Input('appTransition') sizeDate: string='';  //Input->decorador
  @Input('color') color: string='';  
  @Input('transition') transition: string='';  
  @HostListener("mouseenter") mouseEnter(){
    this.element.nativeElement.style.fontSize = this.sizeDate;
    this.element.nativeElement.style.transition = this.transition;
  }
  @HostListener("click") mouseClick(){
    this.element.nativeElement.style.color = this.color;
  }
  constructor(private element: ElementRef) { }

}

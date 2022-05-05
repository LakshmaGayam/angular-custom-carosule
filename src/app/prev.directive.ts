import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  prev(){
    var customElement = this.el.nativeElement.parentElement.parentElement.parentElement.children[0];
    console.log(customElement)
    var item = customElement.getElementsByClassName("item");
    console.log(item)
    customElement.prepend(item[item.length-1])
  }
}
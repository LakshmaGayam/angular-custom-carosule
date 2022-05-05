import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { 
  }

  @HostListener('click')
  next(){
    var customElement = this.el.nativeElement.parentElement.parentElement.parentElement.children[0];
    console.log(customElement)
    var item = customElement.getElementsByClassName("item");
    console.log(item)
    customElement.append(item[0])
  }

}
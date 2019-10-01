import { Directive, ElementRef, OnInit, OnChanges, AfterContentInit, AfterViewChecked } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';

@Directive({
  selector: '[appStatuscolor]'
})
export class StatuscolorDirective implements AfterViewChecked {

  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
    // const status = el.nativeElement.innerText;
    // console.log(status);
    // if (status === 'Denied') {
    //   el.nativeElement['style']['color'] = 'red';
    // }
    // el.nativeElement.style.color = 'red';
    // console.log(el.nativeElement);
  }

  ngAfterViewChecked() {
    const status: string = this.el.nativeElement.innerHTML;
    if (status === 'Denied') {
      this.el.nativeElement.style.color = 'red';
    } else if (status === 'Approved') {
      this.el.nativeElement.style.color = 'green';
    }
  }

}
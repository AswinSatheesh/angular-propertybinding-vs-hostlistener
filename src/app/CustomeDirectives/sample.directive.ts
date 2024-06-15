import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor() { }

  @HostListener('focus') viewFocus(){
    console.log("focus logic from directive");
    
  }

  // @HostBinding('value')
  // newName : string ="vedha";

}

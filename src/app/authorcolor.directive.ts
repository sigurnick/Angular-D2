import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAuthorcolor]'
})
export class AuthorcolorDirective implements OnInit{

  constructor(private ref: ElementRef) { }

  ngOnInit(){
    this.ref.nativeElement.style.color= 'grey';
  }

}

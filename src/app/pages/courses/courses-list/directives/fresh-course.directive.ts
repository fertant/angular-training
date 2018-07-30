import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appFreshCourse]'
})
export class FreshCourseDirective implements OnChanges {

  @Input('appFreshCourse') appFreshCourse: Date;

  constructor(private el: ElementRef, public renderer: Renderer2) {
  }

  ngOnChanges() {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const creationTime = this.appFreshCourse.getTime();
    const lastWeeks = currentTime - (14 * 24 * 60 * 60 * 1000);
    if (creationTime < currentTime && creationTime >= lastWeeks) {
      this.renderer.addClass(this.el.nativeElement, 'border');
      this.renderer.addClass(this.el.nativeElement, 'border-success');
    } else if (creationTime > currentTime) {
      this.renderer.addClass(this.el.nativeElement, 'border');
      this.renderer.addClass(this.el.nativeElement, 'border-primary');
    }
  }

}

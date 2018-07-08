import { FreshCourseDirective } from './fresh-course.directive';
import { ElementRef } from '@angular/core';

describe('FreshCourseDirective', () => {
  it('should create an instance', () => {
    const directive = new FreshCourseDirective(new ElementRef('<div></div>'));
    expect(directive).toBeTruthy();
  });
});

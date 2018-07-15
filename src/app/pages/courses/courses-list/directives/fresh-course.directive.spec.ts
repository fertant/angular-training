import { FreshCourseDirective } from './fresh-course.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

describe('FreshCourseDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2]
    });
  });

  it('should create an instance', inject([Renderer2], (renderer: Renderer2) => {
    const directive = new FreshCourseDirective(new ElementRef('<div></div>'), renderer);
    expect(directive).toBeTruthy();
  }));
});

import { Component, ChangeDetectionStrategy, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CourseModel } from '../../model/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  @Input() course: CourseModel;
  @Output() cancel = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancelCourse(id: number) {
    this.cancel.emit(id);
  }

  editCourse(id: number) {
    this.router.navigateByUrl('/courses/edit-course/' + id);
  }
}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CourseModel } from '../../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: CourseModel;
  @Output() cancel = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  cancelCourse(id: number) {
    this.cancel.emit(id);
  }

}

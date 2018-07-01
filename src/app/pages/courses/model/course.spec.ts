import { CourseModel } from './course';

describe('Course model', () => {
  let course: CourseModel;

  beforeEach(() => {
    course = new CourseModel();
  });

  afterEach(() => {
    course = null;
  });


  it('should course equal stub', () => {
    expect(course).toBeTruthy();
    expect(course.id).toEqual(0);
    expect(course.creationDate).toEqual(new Date());
  });

});

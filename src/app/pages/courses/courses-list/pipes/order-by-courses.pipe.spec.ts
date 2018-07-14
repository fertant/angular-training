import { OrderByCoursesPipe } from './order-by-courses.pipe';

describe('OrderByCoursesPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByCoursesPipe();
    expect(pipe).toBeTruthy();
  });

  it('check sorting by date', () => {
    const pipe = new OrderByCoursesPipe();
    const coursesStub = [
      {
        id: 0,
        title: 'Title of the news1',
        creationDate: new Date('08.06.2018'),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: true,
      },
      {
        id: 1,
        title: 'Title of the news2',
        creationDate: new Date('09.06.2018'),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: false,
      },
      {
        id: 2,
        title: 'Title of the news3',
        creationDate: new Date('07.06.2018'),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: false,
      }
    ];
    const orderedListAsc = pipe.transform(coursesStub, ['id']);
    expect(orderedListAsc[0].id).toBe(0);
    const orderedListDesc = pipe.transform(coursesStub, ['-id']);
    expect(orderedListDesc[0].id).toBe(2);
    const orderedDateDesc = pipe.transform(coursesStub, ['-creationDate']);
    expect(orderedDateDesc[0].id).toBe(1);
    const orderedDateAsc = pipe.transform(coursesStub, ['creationDate']);
    expect(orderedDateAsc[0].id).toBe(2);
    const orderedTextDesc = pipe.transform(coursesStub, ['-title']);
    expect(orderedTextDesc[0].id).toBe(2);
    const orderedTextAsc = pipe.transform(coursesStub, ['title']);
    expect(orderedTextAsc[0].id).toBe(0);
    const orderedList = pipe.transform(coursesStub, [['title', 'creationDate']]);
    expect(orderedList[0].id).toBe(0);
  });
});

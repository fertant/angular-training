import { FilterCoursesPipe } from './filter-courses.pipe';

describe('FilterCoursesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterCoursesPipe();
    expect(pipe).toBeTruthy();
  });

  it('check filter with different params', () => {
    const pipe = new FilterCoursesPipe();
    const items = [
      {
        id: 0,
        title: 'Title of the news1',
        creationDate: new Date(),
        duration: 2,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: true,
      },
      {
        id: 1,
        title: 'Title of the news2',
        creationDate: new Date('09.07.2018'),
        duration: 5,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: false,
      },
      {
        id: 2,
        title: 'Title of the news3',
        creationDate: new Date('05.07.2018'),
        duration: 10,
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
        topRated: false,
      }
    ];
    expect(pipe.transform(items, {title: 'news2'})).toEqual([{
      id: 1,
      title: 'Title of the news2',
      creationDate: new Date('09.07.2018'),
      duration: 5,
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
      topRated: false,
    }]);
    expect(pipe.transform(items, {duration: 5})).toEqual([{
      id: 1,
      title: 'Title of the news2',
      creationDate: new Date('09.07.2018'),
      duration: 5,
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
      topRated: false,
    }]);
    expect(pipe.transform(items)).toBe(items);
  });
});

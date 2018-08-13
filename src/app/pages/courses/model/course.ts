export interface CourseInterface {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated?: boolean;
}

export class CourseModel implements CourseInterface {
    id = 0;
    title = '';
    creationDate = new Date();
    duration = 0;
    description = '';
    topRated = false;

    constructor(
      id?: number,
      title?: string,
      creationDate?: Date,
      duration?: number,
      description?: string,
      topRated?: boolean
    ) {
      this.id = id ? id : 0;
      this.title = title ? title : '';
      this.creationDate = creationDate ? creationDate : new Date();
      this.duration = duration ? duration : 0;
      this.description = description ? description : '';
      this.topRated = topRated ? topRated : false;
    }
}

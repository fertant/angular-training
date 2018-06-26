export interface CourseInterface {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
}

export class CourseModel implements CourseInterface {
    id = 0;
    title = '';
    creationDate = new Date();
    duration = 0;
    description = '';
}

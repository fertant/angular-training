import { FormElementBase } from './form-element-base';

export class DatetimeElement extends FormElementBase<string> {
    controlType = 'datetimebox';
    type: string;
    min = new Date();

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

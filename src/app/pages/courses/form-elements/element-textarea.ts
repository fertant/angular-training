import { FormElementBase } from './form-element-base';

export class TextareaElement extends FormElementBase<string> {
    controlType = 'textarea';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

import { FormElementBase } from './form-element-base';

export class TextboxElement extends FormElementBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

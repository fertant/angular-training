import { FormElementBase } from './form-element-base';

export interface SelectorSettings {
    text: string;
    enableCheckAll?: boolean;
    selectAllText?: string;
    unSelectAllText?: string;
    classes: string;
    enableSearchFilter: boolean;
    singleSelection?: boolean;
    disabled: boolean;
}

export class MultiselectElement extends FormElementBase<string> {
    controlType = 'multiselect';
    options: {id: string, itemName: string}[] = [];
    settings: SelectorSettings;

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.settings = options['settings'] || {
            text: 'Please choose one or more element',
            enableCheckAll: false,
            selectAllText: 'select all',
            unSelectAllText: 'unselect all',
            classes: 'angular2-multiselect angular2-multiselect-sites',
            enableSearchFilter: true,
            disabled: true
        };
    }
}

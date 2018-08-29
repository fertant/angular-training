export class FormElementBase<T> {
    value: T;
    key: string;
    label: string;
    validator: string;
    validateProp: string;
    required: boolean;
    order: number;
    controlType: string;
    settings: any;
    options: any[];

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        validator?: string;
        validateProp?: string;
        required?: boolean,
        order?: number,
        controlType?: string,
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.validator = options.validator || null;
        this.validateProp = options.validateProp || null;
        this.required = options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
}

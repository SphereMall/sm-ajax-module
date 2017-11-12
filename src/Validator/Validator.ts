import validate = require('validate.js');
import {IsValidationElementSpecification} from '../Specifications/IsValidationElementSpecification';

export class Validator {
    private form: HTMLElement;
    private rules: any = {};

    constructor(form: HTMLElement) {
        this.form = form;
        this.init();
    }

    validate() {
        return validate({name: '1'}, this.rules);
    }

    private init() {
        let isValidationEl = new IsValidationElementSpecification();

        Object.keys(this.form.childNodes).forEach(key => {
            let element = <HTMLElement>this.form.childNodes[+key];
            if (isValidationEl.IsSatisfiedBy(element) && element.getAttribute('name')) {

                this.rules[element.getAttribute('name')] = {
                    presence: true,
                    length: {
                        minimum: 2,
                        message: 'must be at least 2 characters'
                    }
                };
            }
        });
    }
}
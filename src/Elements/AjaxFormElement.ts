import {AjaxElement} from './AjaxElement';
import {Validator} from '../Validator/Validator';

export class AjaxFormElement extends AjaxElement {
    ajaxSend(): void {
        console.log('call form element');
    }

    subscribe(): void {
        let validator = new Validator(this.element);

        let buttons = this.element.querySelectorAll('button, input[type="submit"]');
        if(buttons.length && buttons.length > 1) {
            return;
        }

        buttons.item(0).addEventListener("click", event => {
            event.preventDefault();
            console.log(validator.validate());
        });
    }
}
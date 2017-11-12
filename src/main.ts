import {Guid} from './Helpers/Guid';
import {AjaxElementFactory} from './Elements/AjaxElementFactory';
import {IAjaxElement} from './Elements/IAjaxElement';
import {Settings} from './Settings';

export class AjaxModule {

    private elements: IAjaxElement[] = [];

    /** Initialize all dom elements with data ajax attributes **/
    init() {
        let elements: NodeList = document.body.querySelectorAll(`
      [data-ajax-action], 
      [data-ajax-controller], 
      [data-ajax-method]`);

        Object.keys(elements).forEach(key => {
            let currentElement = <HTMLElement>elements[+key];

            let elementIdAttr = currentElement.attributes.getNamedItem('data-ajax-element-id');
            if (elementIdAttr == null) {
                let elementId = Guid.get();
                currentElement.setAttribute('data-ajax-element-id', elementId);

                let element = AjaxElementFactory.getAjaxElement(currentElement.tagName, elementId);
                element.setElement(currentElement);
                element.setSettings(new Settings());
                element.subscribe();

                this.elements.push(element);
            }
        });
    }

    getElements() {
        return this.elements;
    }
}

export const module = new AjaxModule();
module.init();
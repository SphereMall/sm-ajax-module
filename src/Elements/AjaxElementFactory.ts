import {AjaxFormElement} from "./AjaxFormElement";
import {AjaxHtmlElement} from "./AjaxHtmlElement";
import {AjaxElement} from "./AjaxElement";

export class AjaxElementFactory {

  static getAjaxElement(tagName: string, elementId: string): AjaxElement {
    switch (tagName) {
      case 'FORM':
        return new AjaxFormElement(elementId);

      default:
        return new AjaxHtmlElement(elementId);
    }
  }
}
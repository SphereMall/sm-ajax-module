import {AjaxElement} from "./AjaxElement";

export class AjaxFormElement extends AjaxElement {
  ajaxSend(): void {
    console.log('call form element');
  }

  subscribe(): void {
    console.log(this);
  }
}
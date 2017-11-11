import {IAjaxElement} from "./IAjaxElement";
import {Settings} from "../Settings";

export abstract class AjaxElement implements IAjaxElement {
  protected id: string;
  protected element: HTMLElement;
  protected settings: Settings;

  constructor(id: string) {
    this.id = id;
  }

  abstract ajaxSend(): void;

  abstract subscribe(): void;

  setElement(element: HTMLElement) {
    this.element = element;
  }

  setSettings(settings: Settings) {
    this.settings = settings;
  }
}
import {Settings} from './settings';

export class AjaxModule {

  private settings: Settings;

  init() {
    this.settings = new Settings;

    console.log(this.settings);
  }
}
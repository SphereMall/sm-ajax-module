import {ISpecification} from "./ISpecification";
import {IAjaxElement} from "../Elements/IAjaxElement";
import {AjaxFormElement} from "../Elements/AjaxFormElement";

export class IsElementFormSpecification implements ISpecification<IAjaxElement> {

  IsSatisfiedBy(candidate: IAjaxElement): boolean {
    return candidate instanceof AjaxFormElement;
  }
}
import {ISpecification} from "./ISpecification";
export class IsValidationElementSpecification implements ISpecification<HTMLElement> {

  IsSatisfiedBy(candidate: HTMLElement): boolean {
    return candidate.tagName == 'INPUT';
  }
}
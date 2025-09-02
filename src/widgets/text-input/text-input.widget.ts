import { Action } from '../../actions/action';
import { Suggestions } from '../../shared/suggestions';
import { Validation } from '../../shared/validation';

export type TextInputWidgetProps = {
  name: string;
  label: string;
  hintText?: string;
  value?: string;
  type?: 'SINGLE_LINE' | 'MULTIPLE_LINE';
  onChangeAction?: Action;
  initialSuggestions?: Suggestions;
  validation?: Validation;
  placeholderText?: string;
};

export class TextInputWidget {
  public readonly name: string;
  public readonly label: string;
  public readonly hintText?: string;
  public readonly value?: string;
  public readonly type?: 'SINGLE_LINE' | 'MULTIPLE_LINE';
  public readonly onChangeAction?: Action;
  public readonly initialSuggestions?: Suggestions;
  public readonly validation?: Validation;
  public readonly placeholderText?: string;

  public constructor(props: TextInputWidgetProps) {
    this.name = props.name;
    this.label = props.label;
    this.hintText = props.hintText;
    this.value = props.value;
    this.type = props.type;
    this.onChangeAction = props.onChangeAction;
    this.initialSuggestions = props.initialSuggestions;
    this.validation = props.validation;
    this.placeholderText = props.placeholderText;
  }
}
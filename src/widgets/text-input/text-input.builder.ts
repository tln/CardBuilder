import { ActionBuilder } from '../../actions/action.builder';
import { Suggestions } from '../../shared/suggestions';
import { Validation } from '../../shared/validation';
import {
  TextInputWidget,
  TextInputWidgetProps,
} from './text-input.widget';

type TextInputBuilderProps = {
  name?: string;
  label?: string;
  hintText?: string;
  value?: string;
  multiline?: boolean;
  onChangeActionBuilder?: ActionBuilder;
  initialSuggestions?: Suggestions;
  validation?: Validation;
};

export class TextInputBuilder {
  private _props: TextInputBuilderProps = {};

  public build(): TextInputWidget {
    if (!this._props.name) {
      throw new Error('TextInput name is required');
    }
    if (!this._props.label) {
      throw new Error('TextInput label is required');
    }

    const hasAction = !!this._props.onChangeActionBuilder;
    const props: TextInputWidgetProps = {
      name: this._props.name,
      label: this._props.label,
      hintText: this._props.hintText,
      value: this._props.value,
      type: this._props.multiline ? 'MULTIPLE_LINE' : 'SINGLE_LINE',
      initialSuggestions: this._props.initialSuggestions,
      validation: this._props.validation,
      ...(hasAction && {
        onChangeAction: this._props.onChangeActionBuilder!.build(),
      }),
    };

    return new TextInputWidget(props);
  }

  public setFieldName(fieldName: string): this {
    this._props.name = fieldName;
    return this;
  }

  public setTitle(title: string): this {
    this._props.label = title;
    return this;
  }

  public setHint(hint: string): this {
    this._props.hintText = hint;
    return this;
  }

  public setValue(value: string): this {
    this._props.value = value;
    return this;
  }

  public setMultiline(multiline: boolean): this {
    this._props.multiline = multiline;
    return this;
  }

  public setOnChangeAction(action: ActionBuilder): this {
    this._props.onChangeActionBuilder = action;
    return this;
  }

  public setSuggestions(suggestions: Suggestions): this {
    this._props.initialSuggestions = suggestions;
    return this;
  }


  public setValidation(validation: Validation): this {
    this._props.validation = validation;
    return this;
  }
}
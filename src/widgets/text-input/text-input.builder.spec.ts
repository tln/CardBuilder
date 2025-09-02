import { ActionBuilder } from '../../actions/action.builder';
import { TextInputBuilder } from './text-input.builder';

describe('TextInputBuilder', () => {
  let sut: TextInputBuilder;

  beforeEach(() => {
    sut = new TextInputBuilder();
  });

  test('throws error if name is not set', () => {
    sut.setTitle('Test Label');
    expect(() => sut.build()).toThrow('TextInput name is required');
  });

  test('throws error if label is not set', () => {
    sut.setFieldName('testField');
    expect(() => sut.build()).toThrow('TextInput label is required');
  });

  test('builds with required fields', () => {
    sut.setFieldName('testField').setTitle('Test Label');
    const output = sut.build();
    expect(output.name).toBe('testField');
    expect(output.label).toBe('Test Label');
  });

  test('sets hintText', () => {
    sut.setFieldName('testField').setTitle('Test Label').setHint('Test hint');
    const output = sut.build();
    expect(output.hintText).toBe('Test hint');
  });

  test('sets value', () => {
    sut.setFieldName('testField').setTitle('Test Label').setValue('Test value');
    const output = sut.build();
    expect(output.value).toBe('Test value');
  });

  test('sets type to MULTIPLE_LINE when multiline is true', () => {
    sut.setFieldName('testField').setTitle('Test Label').setMultiline(true);
    const output = sut.build();
    expect(output.type).toBe('MULTIPLE_LINE');
  });

  test('sets type to SINGLE_LINE when multiline is false', () => {
    sut.setFieldName('testField').setTitle('Test Label').setMultiline(false);
    const output = sut.build();
    expect(output.type).toBe('SINGLE_LINE');
  });

  test('sets onChange action', () => {
    const action = new ActionBuilder().setFunctionName('testFunction');
    sut.setFieldName('testField').setTitle('Test Label').setOnChangeAction(action);
    const output = sut.build();
    expect(output.onChangeAction).toBeDefined();
    expect(output.onChangeAction?.function).toBe('testFunction');
  });

  test('sets initialSuggestions', () => {
    const suggestions = { items: ['item1', 'item2'] };
    sut.setFieldName('testField').setTitle('Test Label').setSuggestions(suggestions);
    const output = sut.build();
    expect(output.initialSuggestions).toBe(suggestions);
  });

  test('sets validation', () => {
    const validation = { characterLimit: 100, inputType: 'email' };
    sut.setFieldName('testField').setTitle('Test Label').setValidation(validation);
    const output = sut.build();
    expect(output.validation).toBe(validation);
  });

});
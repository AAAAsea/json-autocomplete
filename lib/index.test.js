const autocompleteJson = require('./index');

test('valid JSON string', () => {
  const input = '{"key": "value"}';
  const output = autocompleteJson(input);
  expect(output).toBe(input);
});

test('JSON string with missing closing brackets', () => {
  const input = '{"key": {"subkey": "value"';
  const expectedOutput = '{"key": {"subkey": "value"}}';
  const output = autocompleteJson(input);
  expect(output).toBe(expectedOutput);
});

test('JSON string with missing values', () => {
  const input = '{"key": "value", "missing": }';
  const expectedOutput = '{"key": "value", "missing": null }';
  const output = autocompleteJson(input);
  expect(output).toBe(expectedOutput);
});

test('JSON string with uncomplete key', () => {
  const input = '{"user":{"id":123,"nam';
  const expectedOutput = '{"user":{"id":123}}';
  const output = autocompleteJson(input);
  expect(output).toBe(expectedOutput);
});

test('JSON string with uncomplete key in Chinese', () => {
  const input = '{"key": {"问题标签": "描写细节","中文';
  const expectedOutput = '{"key": {"问题标签": "描写细节"}}';
  const output = autocompleteJson(input);
  expect(output).toBe(expectedOutput);
});

test('empty string', () => {
  const input = '';
  const output = autocompleteJson(input);
  expect(output).toBeNull();
});

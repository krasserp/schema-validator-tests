const validator = require('jsonschema').Validator;
const v = new validator();

const { textInputs } = require('./schemas/schema');

const textInput = {
  type: 'text',
  fieldTitle: 'title',
  fieldName: 'name',
  multi: false
};

const textInput2 = {
  type: 'textaresdfa',
  fieldTitle: 'title a',
  fieldName: 'name a',
  multi: false
};

const testInputs = [textInput, textInput2];

for (test of testInputs) {
  const validated = v.validate(test, textInputs);

  for (error of validated.errors) {
    console.log(JSON.stringify(error));
  }

  console.log(validated);
}

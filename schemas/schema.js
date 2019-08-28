// example splitting into separate object types dependant on input type
const commonFields = {
  fieldTitle: {
    type: 'string',
    required: true
  },
  fieldName: {
    type: 'string'
  },
  multi: {
    type: 'boolean'
  }
};

const textInputs = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['text', 'textarea']
    },
    ...commonFields
  }
};

const fieldType = {
  qId: {
    type: 'string',
    required: true
  },
  inputType: {
    type: 'object',
    enum: [textInputs],
    required: true
  }
};

module.exports = {
  fieldType,
  textInputs
};

'use strict';

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create the todo item.'));
    return;
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Create todo',
      input: event,
      data: data
    }),
  };

  callback(null, response);
};

module.exports.get = (event, context, callback) => {
  const id = event.pathParameters.id;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Get ToDo: '+id,
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.list = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'List all ToDos',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t update the todo item.'));
    return;
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Update ToDo',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.delete = (event, context, callback) => {
  const id = event.pathParameters.id;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Delete ToDO',
      input: event,
    }),
  };

  callback(null, response);
};
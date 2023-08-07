const {
  rest: {
    protocol, hostname,
  },
} = require('config');

const fetch = require('node-fetch');

const ORIGIN = `${protocol}//${hostname}`;

exports.propertyDetails = async (qs) => {
  const url = `${ORIGIN}/PropertyDetails?${qs}`;

  const response = await fetch(url);
  const result = await response.json();

  return result;
};

exports.searchProperties = async (qs) => {
  const url = `${ORIGIN}/SearchProperties?${qs}`;

  const response = await fetch(url);
  const result = await response.json();

  return result;
};

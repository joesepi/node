'use strict';

const util = require('util');

const {
  randomBytes,
} = require('crypto');

module.exports = {
  randomBytes: util.promisify(randomBytes)
};

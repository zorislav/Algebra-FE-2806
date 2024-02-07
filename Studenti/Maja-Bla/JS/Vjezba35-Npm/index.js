
//lodash

const __ = require('lodash');

function getType(e) {

  if(__.isNumber(e)) {

    console.log(`${e} is number`);
  }

  if(__.isString(e)) {

    console.log(JSON.stringify(e) + 'is string');
  }


  if(__.isArray(e)) {

    console.log(JSON.stringify(e) + 'is array');
  }

  if(__.isObject(e)) {

    console.log(JSON.stringify(e) + 'is object');
  }
}

module.exports = getType;
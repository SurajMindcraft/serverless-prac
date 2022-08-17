'use strict';

module.exports.hello = async (event) => {
  let rand = parseInt(Math.random() * 100 );
  console.log(`Random number is : ${rand}`);
  return rand;
};

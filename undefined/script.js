"use strict";

const describeProperty = function (obj, key) {
  if (!Object.hasOwn(obj, key)) {
    return "missing";
  } else if (obj[key] === undefined) {
    return "undefined";
  } else {
    return typeof obj[key];
  }
};

console.log(describeProperty({ Number: 0 }, "Number"));

console.log(describeProperty({}, "Number"));
// "missing"

console.log(describeProperty({ Number: undefined }, "Number"));
// "undefined"

console.log(describeProperty({ Number: 0 }, "Number"));
// "number"

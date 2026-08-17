"use strict";

(function () {
  function checkFiniteStatus(value) {
    if (Number.isFinite(value)) {
      return "strict-finite";
    } else if (isFinite(value)) {
      return "coerced-finite";
    } else {
      return "invalid";
    }
  }

  console.log(checkFiniteStatus(42));
  // "strict-finite"

  console.log(checkFiniteStatus("42"));
  // "coerced-finite"

  console.log(checkFiniteStatus(Infinity));
  // "invalid"

  console.log(checkFiniteStatus("hello"));
  // "invalid"
})();

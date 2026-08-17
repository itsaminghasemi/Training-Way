"use strict";

(function () {
  function parseSafeNumber(value) {
    if (typeof value === "number" && !Number.isNaN(value)) {
      return value;
    } else if (typeof value === "string" && !Number.isNaN(Number(value))) {
      return Number(value);
    }
    return null;
  }

  console.log(parseSafeNumber(42));
  // 42

  console.log(parseSafeNumber("42"));
  // 42

  console.log(parseSafeNumber("42px"));
  // null

  console.log(parseSafeNumber(NaN));
  // null
})();

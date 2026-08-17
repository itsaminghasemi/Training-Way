"use strict";

(function () {
  function extractMeasurement(value) {
    const result = parseFloat(value);

    if (!isNaN(result)) {
      return result;
    } else {
      return null;
    }
  }

  console.log(extractMeasurement("42.5px"));
  // 42.5

  console.log(extractMeasurement("100%"));
  // 100

  console.log(extractMeasurement("rem20"));
  // null

  console.log(extractMeasurement("  10.2em "));
  // 10.2
})();

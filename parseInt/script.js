"use strict";

(function () {
  function safeParseInt(value, radix = 10) {
    const result = parseInt(value, radix);
    return Number.isNaN(result) ? null : result;
  }
  console.log(safeParseInt("11", 2));
  // 3

  console.log(safeParseInt("ff", 16));
  // 255 (Very useful for frontend hex color conversion!)

  console.log(safeParseInt("42px"));
  // 42 (Defaults to base 10, stops at 'p')

  console.log(safeParseInt("hello", 10));
  // null
})();

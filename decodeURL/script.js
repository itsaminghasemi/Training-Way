"use strict";

(function () {
  function safeDecode(value, fullDecode) {
    if (fullDecode) {
      try {
        return decodeURIComponent(value);
      } catch (e) {
        return value;
      }
    } else {
      try {
        return decodeURI(value);
      } catch (e) {
        return value;
      }
    }
  }
  console.log(safeDecode("Hello%20World", false));
  // "Hello World"

  console.log(safeDecode("path%2Fto%2Fpage", false));
  // "path%2Fto%2Fpage" (decodeURI ignores %2F)

  console.log(safeDecode("path%2Fto%2Fpage", true));
  // "path/to/page" (decodeURIComponent decodes %2F)

  console.log(safeDecode("invalid%ZZ", true));
  // "invalid%ZZ" (catches the error and returns the original string)
})();

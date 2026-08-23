(function () {
  /**
   * Processes messy user input using strict/loose equality and type coercion rules.
   * @param {*} val - The input value to process.
   * @returns {string|number} The processed result based on input type.
   */
  function processValue(val) {
    // 1. Strict equality check for the exact number 0.
    if (val === 0) {
      return 'Strict Zero';
    }
    // 2. Loose equality check catches other falsy values that coerce to 0 (e.g., "", false, null).
    else if (val == 0) {
      return 'Loose Zero-like';
    }
    // 3. Check if the value can be coerced into a valid number.
    // Subtracting 0 forces numeric coercion. If the result is NOT NaN, it's a valid number string.
    else if (!Number.isNaN(val - 0)) {
      // Parentheses explicitly show: coerce first, then add 5.
      return val - 0 + 5;
    }
    // 4. If it's not a number, it must be a non-numeric string.
    else {
      // The `+` operator prioritizes string concatenation here.
      return val + ' is text';
    }
  }

  // 🧪 Test Cases
  console.log(processValue(0)); // Expected: "Strict Zero"
  console.log(processValue('')); // Expected: "Loose Zero-like"
  console.log(processValue('10')); // Expected: 15
  console.log(processValue('hello')); // Expected: "hello is text"
})();

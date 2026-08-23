(function () {
  /**
   * Analyzes a JavaScript value to determine its type and if it is a primitive.
   * @param {*} value - The value to analyze.
   * @returns {Object} An object containing 'typeName' (string) and 'isPrimitive' (boolean).
   */
  function getTypeInfo(value) {
    // 1. Get the type string using the typeof operator.
    const typeName = typeof value;

    // 2. Determine if it's a primitive.
    // A value is primitive IF it is strictly null, OR its type is NOT 'object' AND NOT 'function'.
    // This elegantly bypasses the need to list all 7 primitives and handles the 'null' quirk.
    const isPrimitive =
      value === null || (typeName !== "object" && typeName !== "function");

    // 3. Return the result object.
    // Note: ES6 property shorthand allows us to write { typeName, isPrimitive }
    // instead of { typeName: typeName, isPrimitive: isPrimitive }.
    return {
      typeName,
      isPrimitive,
    };
  }

  // 🧪 Test Cases
  console.log(getTypeInfo("hello")); // Expected: { typeName: "string", isPrimitive: true }
  console.log(getTypeInfo(null)); // Expected: { typeName: "object", isPrimitive: true }
  console.log(getTypeInfo([1, 2, 3])); // Expected: { typeName: "object", isPrimitive: false }
  console.log(getTypeInfo(() => {})); // Expected: { typeName: "function", isPrimitive: false }
})();

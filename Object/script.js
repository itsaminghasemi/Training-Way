(function () {
  // 1. Encapsulate in an IIFE (Immediately Invoked Function Expression)
  // to prevent variables from leaking into the global scope.
  const PreferenceManager = {
    // 2. Initialize as an empty object to store dynamic key-value pairs.
    settings: {},

    // 3. Method to add or update a setting.
    setPreference(key, value) {
      // Use bracket notation `[]` so the variable `key` is evaluated as the property name.
      // Use `this.settings` to target the object's own property.
      this.settings[key] = value;
      return "done";
    },

    // 4. Method to retrieve a setting.
    getPreference(key) {
      // Return only the exact value stored, matching the test case expectation.
      return this.settings[key];
    },

    // 5. Method to verify if a property exists directly on the object.
    isCustomPreference(key) {
      // `hasOwnProperty` returns a boolean.
      // It safely ignores inherited prototype properties (like 'toString').
      return this.settings.hasOwnProperty(key);
    },
  };

  // --- Test Cases ---

  // Test 1: Set a value and verify exact retrieval.
  PreferenceManager.setPreference("theme", "dark");
  console.log(PreferenceManager.getPreference("theme")); // Expected: 'dark'

  // Test 2: Verify the custom property is recognized as a direct property.
  console.log(PreferenceManager.isCustomPreference("theme")); // Expected: true

  // Test 3: Verify inherited prototype properties are correctly rejected.
  console.log(PreferenceManager.isCustomPreference("toString")); // Expected: false
})();

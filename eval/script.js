"use strict";

(function () {
  function getInput(template, data) {
    return template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
      return Object.hasOwn(data, key) ? String(data[key]) : "";
    });
  }

  console.log(getInput("Hello, {{name}}!", { name: "Amin" }));
  // "Hello, Amin!"

  console.log(getInput("You have {{count}} messages.", { count: 0 }));
  // "You have 0 messages."

  console.log(getInput("User: {{user}}", {}));
  // "User: "

  console.log(getInput("{{a}} + {{b}}", { a: 1, b: 2 }));
  // "1 + 2"
})();

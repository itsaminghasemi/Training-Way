"use strict";

(function () {
  function parseQueryString(queryString) {
    const params = {};
    if (queryString === "") {
      return params;
    } else {
      const pairs = queryString.split("&");
      for (const pair of pairs) {
        const [key, value] = pair.split("=");

        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }
      return params;
    }
  }
  console.log(parseQueryString("user=Amin&role=admin"));
  // { user: "Amin", role: "admin" }

  console.log(parseQueryString("q=A%20%26%20B&page=1"));
  // { q: "A & B", page: "1" }

  console.log(parseQueryString("skills=js%2Chtml%2Ccss"));
  // { skills: "js,html,css" }

  console.log(parseQueryString(""));
  // {}
})();

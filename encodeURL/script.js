"use strict";

(function () {
  function buildSafeUrl(baseUrl, path, queryValue) {
    const encodedPath = encodeURI(path);
    const encodedQueryValue = encodeURIComponent(queryValue);
    return `${baseUrl}${encodedPath}?q=${encodedQueryValue}`;
  }
  console.log(buildSafeUrl("https://site.com", "/my docs", "Salt & Pepper"));
  // "https://site.com/my%20docs?q=Salt%20%26%20Pepper"

  console.log(buildSafeUrl("https://site.com", "/folder/sub", "100%"));
  // "https://site.com/folder/sub?q=100%25"

  console.log(buildSafeUrl("https://site.com", "/", "A=B"));
  // "https://site.com/?q=A%3DB"
})();

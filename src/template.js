// Webpack require:
const header = require("./sections/header.js").default;
const headerContent = require("./sections/head-content").default;

// Export a function / promise / or a string:
// This function has to return a string or promised string:
module.exports = function (templateParams) {
  return `
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Your Page Title | Relevant Keyword</title>

</head>
<body>
  <div id="app">
    ${header}
    ${headerContent}
  </div>
</body>
</html>
 `;
};

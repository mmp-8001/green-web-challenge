// Webpack require:
const center = require("./sections/center").default;
const security = require("./sections/security").default;
const plans = require("./sections/plans").default;
const customers = require("./sections/customers").default;
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

    <title>ایران سرور</title>

</head>
<body>
  <div id="app">
    ${header}
    ${headerContent}
    ${plans}
    ${security}
    ${center}
    ${customers}
  </div>
</body>
</html>
 `;
};

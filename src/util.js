export const reference = string => `\`\`\`${string}\`\`\``;

export const template = (slot = '') => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>${slot}
  </body>
</html>`;
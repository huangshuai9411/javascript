export const reference = string => `\`\`\`
${string}
\`\`\``;

export const template = (slot = '', replace) => replace ? slot :`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>醉翁亭记</title>
  </head>
  <body>${slot}
  </body>
</html>`;
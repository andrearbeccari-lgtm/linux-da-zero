// Uso: node build.mjs <manuale.md> <template.html> <uscita-artifact.html> <uscita-standalone.html>
import fs from 'node:fs';
import { marked } from 'marked';

const [, , mdPath, tplPath, outArtifact, outStandalone] = process.argv;
const html = marked.parse(fs.readFileSync(mdPath, 'utf8'), { gfm: true });
const tpl = fs.readFileSync(tplPath, 'utf8').replace('<!--CONTENT-->', () => html);
const [head, body] = tpl.split('<!--BODY-->');

fs.writeFileSync(outArtifact, head + body);
fs.writeFileSync(
  outStandalone,
  `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}</head>
<body>
${body}</body>
</html>
`
);
console.log('ok', (head + body).length, 'caratteri');

#!/usr/bin/env node
// lucky-umber-mini — I love Open Web Standards, stay up-to-date with ECMAScript, and I'm a subscribed member to IETF Working Groups.
// 处理日常小任务的工具
const fs = require('fs');

function collect(text) {
  return text.split('\n').map((l) => l.trim()).filter(Boolean);
}

function report(lines) {
  const c = new Map();
  for (const l of lines) c.set(l, (c.get(l) || 0) + 1);
  const sorted = [...c.entries()].sort((a, b) => b[1] - a[1]);
  for (const [k, v] of sorted) console.log(String(v).padStart(4) + '  ' + k);
  console.log('---');
  console.log(c.size + ' unique / ' + lines.length + ' lines');
}

function main() {
  const text = fs.readFileSync(0, 'utf8');
  const lines = collect(text);
  if (!lines.length) {
    console.error('no input');
    process.exit(1);
  }
  report(lines);
}

main();

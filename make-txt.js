#!/usr/bin/env node
/**
 * prompts.md → prompts.txt 변환
 * 마크다운 기호 제거, 프롬프트 본문 보존
 */
const fs = require('fs');
const path = require('path');

function mdToTxt(md) {
  return md
    // 코드블록 펜스(```) 제거
    .replace(/^```[\w]*\n?/gm, '')
    .replace(/^```$/gm, '')
    // H1 (#)
    .replace(/^# (.+)$/gm, (_, t) => `${'='.repeat(60)}\n${t.toUpperCase()}\n${'='.repeat(60)}`)
    // H2 (##)
    .replace(/^## (.+)$/gm, (_, t) => `\n${'─'.repeat(50)}\n${t}\n${'─'.repeat(50)}`)
    // H3 (###)
    .replace(/^### (.+)$/gm, (_, t) => `\n▶ ${t}\n`)
    // bold (**text**)
    .replace(/\*\*(.+?)\*\*/g, '$1')
    // italic (*text*)
    .replace(/\*(.+?)\*/g, '$1')
    // blockquote (> text)
    .replace(/^> (.+)$/gm, '  ⚠ $1')
    // horizontal rule
    .replace(/^---+$/gm, '─'.repeat(50))
    // 연속 빈줄 3개 이상 → 2개로
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const items = ['bookkeeper', 'hr-recruiter', 'nurse-np', 'paralegal'];
const base = path.dirname(__filename);

console.log('\n🔄 prompts.md → prompts.txt 변환\n');
items.forEach(item => {
  const src = path.join(base, item, 'prompts.md');
  const dst = path.join(base, item, 'prompts.txt');
  const md = fs.readFileSync(src, 'utf8');
  fs.writeFileSync(dst, mdToTxt(md), 'utf8');
  console.log(`✓ ${item}/prompts.txt`);
});
console.log('\n✅ 완료\n');

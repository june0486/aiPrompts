#!/usr/bin/env node
/**
 * Markdown → Styled HTML converter
 * Usage: node convert.js
 * Output: HTML files ready for browser print-to-PDF
 */

const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 13px;
    line-height: 1.7;
    color: #1a1a1a;
    background: #fff;
    max-width: 760px;
    margin: 0 auto;
    padding: 40px 48px;
  }

  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #0f172a;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 12px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 15px;
    font-weight: 700;
    color: #1e3a5f;
    margin-top: 28px;
    margin-bottom: 10px;
    padding: 6px 12px;
    background: #f0f7ff;
    border-left: 3px solid #2563eb;
    border-radius: 0 4px 4px 0;
  }

  h3 {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  p { margin-bottom: 10px; }

  ul, ol {
    padding-left: 20px;
    margin-bottom: 10px;
  }

  li { margin-bottom: 3px; }

  code {
    font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
    font-size: 11.5px;
    background: #f8fafc;
    padding: 1px 4px;
    border-radius: 3px;
    color: #1e40af;
  }

  pre {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 16px 18px;
    overflow: visible;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 12px 0 16px;
    page-break-inside: avoid;
  }

  pre code {
    background: none;
    padding: 0;
    color: #1e293b;
    font-size: 11px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
  }

  blockquote {
    background: #fffbeb;
    border-left: 3px solid #f59e0b;
    padding: 10px 16px;
    margin: 12px 0;
    border-radius: 0 6px 6px 0;
    font-size: 12.5px;
  }

  hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 20px 0;
  }

  strong { font-weight: 600; color: #0f172a; }

  @media print {
    body { padding: 20px 32px; font-size: 12px; }
    h1 { font-size: 20px; }
    h2 { font-size: 13px; }
    pre { page-break-inside: avoid; }
    h2, h3 { page-break-after: avoid; }
  }
`;

function convertFile(inputPath, outputPath, title) {
  const md = fs.readFileSync(inputPath, 'utf8');
  const body = marked(md);
  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>${CSS}</style>
</head>
<body>
${body}
</body>
</html>`;
  fs.writeFileSync(outputPath, html);
  console.log(`✓ ${path.basename(outputPath)}`);
}

const BASE = path.dirname(__filename);

const files = [
  // 미리보기 파일 (Gumroad Preview)
  ['bookkeeper/preview.md',  'bookkeeper/preview.html',  'Bookkeeper ChatGPT Prompts — Free Preview'],
  ['hr-recruiter/preview.md','hr-recruiter/preview.html','HR Manager ChatGPT Prompts — Free Preview'],
  ['nurse-np/preview.md',    'nurse-np/preview.html',    'Nurse ChatGPT Prompts — Free Preview'],
  ['paralegal/preview.md',   'paralegal/preview.html',   'Paralegal ChatGPT Prompts — Free Preview'],

  // 실제 상품 파일 (구매자에게 전달되는 메인 PDF)
  ['bookkeeper/prompts.md',  'bookkeeper/prompts.html',  'Bookkeeper & Accountant ChatGPT Prompts — 25 Templates'],
  ['hr-recruiter/prompts.md','hr-recruiter/prompts.html','HR Manager & Recruiter ChatGPT Prompts — 25 Templates'],
  ['nurse-np/prompts.md',    'nurse-np/prompts.html',    'Nurse & Nurse Practitioner ChatGPT Prompts — 25 HIPAA-Safe Templates'],
  ['paralegal/prompts.md',   'paralegal/prompts.html',   'Paralegal & Legal Assistant ChatGPT Prompts — 25 State-Aware Templates'],
];

console.log('\n🔄 Markdown → HTML 변환 시작\n');
files.forEach(([src, dst, title]) => {
  convertFile(path.join(BASE, src), path.join(BASE, dst), title);
});
console.log('\n✅ 완료. 각 .html 파일을 브라우저에서 열고 Ctrl+P → PDF로 저장하세요.\n');
console.log('파일 위치:');
files.forEach(([, dst]) => console.log('  ' + path.join(BASE, dst)));

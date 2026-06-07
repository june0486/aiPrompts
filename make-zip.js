#!/usr/bin/env node
/**
 * ZIP 생성 스크립트 (JSZip 사용)
 * Usage: node make-zip.js
 */
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const base = path.dirname(__filename);
const dist = path.join(base, 'dist');
if (!fs.existsSync(dist)) fs.mkdirSync(dist);

const items = [
  {
    dir: 'bookkeeper',
    pdf: 'Bookkeeper & Accountant ChatGPT Prompts — 25 Templates.pdf',
    zip: 'bookkeeper-accountant-chatgpt-prompts.zip',
  },
  {
    dir: 'hr-recruiter',
    pdf: 'HR Manager & Recruiter ChatGPT Prompts — 25 Templates.pdf',
    zip: 'hr-recruiter-chatgpt-prompts.zip',
  },
  {
    dir: 'nurse-np',
    pdf: 'Nurse & Nurse Practitioner ChatGPT Prompts — 25 HIPAA-Safe Templates.pdf',
    zip: 'nurse-np-chatgpt-prompts.zip',
  },
  {
    dir: 'paralegal',
    pdf: 'Paralegal & Legal Assistant ChatGPT Prompts — 25 State-Aware Templates.pdf',
    zip: 'paralegal-chatgpt-prompts.zip',
  },
];

async function run() {
  console.log('\n📦 ZIP 생성 시작\n');

  for (const { dir, pdf, zip } of items) {
    const pdfPath = path.join(base, dir, pdf);
    const txtPath = path.join(base, dir, 'prompts.txt');
    const zipPath = path.join(dist, zip);

    if (!fs.existsSync(pdfPath)) {
      console.log(`⚠ SKIP [${dir}] — PDF 없음: ${pdf}\n`);
      continue;
    }

    const archive = new JSZip();
    archive.file(pdf, fs.readFileSync(pdfPath));
    archive.file('prompts.txt', fs.readFileSync(txtPath));

    const buf = await archive.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(zipPath, buf);

    const size = (fs.statSync(zipPath).size / 1024).toFixed(0);
    console.log(`✓ dist/${zip} (${size} KB)`);
  }

  console.log('\n✅ 완료. dist/ 폴더의 ZIP 4개를 Gumroad 상품 파일로 업로드하세요.\n');
}

run();

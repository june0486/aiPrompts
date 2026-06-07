# Handoff — AI Prompt Pack 작성 작업

date: 2026-06-07
status: zip-ready
last_completed: |
  - PDF 8개 변환 완료 (오너 확인 완료)
  - CSS pre-wrap 적용 (가로스크롤 제거)
  - TXT 파일 4개 생성 완료
  - make-zip.js 준비 완료
next_action: node make-zip.js 실행 → dist/ 폴더의 ZIP 4개를 Gumroad 상품 파일로 업로드
resume_command: "aiPrompts 프로젝트 handoff.md 읽고 시작"

---

## 현재 상태

- [x] 폴더 구조 생성 완료
- [x] 라인업 확정 (오너 승인)
- [x] 퀄리티 3원칙 확정
- [x] seo.md × 4 — 완료
- [x] prompts.md × 4 — 완료 (각 25개 프롬프트)
- [x] listing.md × 4 — 완료
- [x] 추가 수정 완료 (2026-06-07)
  - bookkeeper: 재무 데이터 보안 경고문 추가
  - hr-recruiter: 주법(CA/NY 등) 경고문 추가 (prompts + listing)
  - nurse-np: 태그 20자 초과 5개 수정
  - paralegal: 태그 20자 초과 5개 수정

폴더 위치:
/home/june0486/workspace/projects/aiPrompts/
  bookkeeper/
  hr-recruiter/
  nurse-np/
  paralegal/

---

## 퀄리티 3원칙 (절대 실수 금지)

### ① 간호사/NP (nurse-np) — HIPAA 보안 블록
prompts.md의 모든 프롬프트 상단에 아래 블록 삽입:
```
⚠️ HIPAA NOTICE: Never enter real patient names, date of birth, SSN,
or any Protected Health Information (PHI) into AI tools.
Use [Patient A] or aliases. This prompt is for documentation drafting
assistance only — final clinical judgment remains with the provider.
```

### ② 회계사/북키퍼 (bookkeeper) — One-shot 연체 이메일
"연체 청구서 독촉" 프롬프트는 One-shot 구조로:
→ 정보 1회 입력 → 1차(정중)·2차(단호)·3차(최후통첩) 3개 동시 출력
→ 각 이메일을 --- 구분선으로 분리하여 한 화면에 모두 표시

### ③ 법무보조 (paralegal) — State 변수 필수
법률 관련 모든 프롬프트 입력 변수에 반드시:
  Applicable State: [e.g., California]
포함. 누락 시 엉뚱한 주 법률 기반 답변 생성 위험.
해당 프롬프트: Demand Letter, 케이스 요약, 디스커버리,
계약서 검토, 법률 리서치, 공소시효 경고

---

## 작성 순서

1. bookkeeper/ (seo → prompts → listing)
2. hr-recruiter/ (seo → prompts → listing)
3. nurse-np/ (seo → prompts → listing)
4. paralegal/ (seo → prompts → listing)

각 아이템 완료 후 다음 아이템으로 이동.
중단 시 이 파일의 체크리스트 업데이트.

---

## 각 파일 작성 기준

### seo.md (3개 섹션)
1. 추천 상품명 (Etsy 140자/Gumroad 자유)
2. Etsy 태그 13개 (각 20자 이내)
3. 가격 전략 (Gumroad/Etsy/Whop)

### prompts.md (핵심 파일 — THE PRODUCT)
- 카테고리별 구분 (4개 카테고리)
- 각 프롬프트: 번호 + 이름 + 코드블록 형식
- 입력 변수는 [대괄호] 표시
- 카테고리별 프롬프트 수:
  bookkeeper: 7+7+6+5 = 25
  hr-recruiter: 7+6+7+5 = 25
  nurse-np: 9+7+5+4 = 25 (전체 HIPAA 블록)
  paralegal: 6+8+6+5 = 25 (법률 관련 State 변수)

### listing.md (3개 섹션)
1. 전체 상품 설명 (Etsy/Gumroad 복붙용, 400~600자)
2. 썸네일 브리프 (Before/After 시각화 가이드)
3. 면책조항 (Disclaimer) 텍스트

---

## 라인업 전체 (prompts.md 작성 시 참고)

### BOOKKEEPER (25개)
[카테고리 1 — 클라이언트 소통 7개]
1. 연체 청구서 독촉 One-shot (1차+2차+3차 동시 출력) ★
2. 신규 클라이언트 환영 이메일
3. 요금 인상 공지 이메일
4. 서비스 확장 제안 이메일
5. 연말 세금 서류 요청 이메일
6. 고객 소개(Referral) 요청 이메일
7. 서비스 범위 확인 이메일

[카테고리 2 — 재무 보고서 내러티브 7개]
8. 월간 P&L 요약 이메일
9. 현금흐름표 평이한 언어 해설문
10. 예산 대비 실적 차이(Variance) 설명
11. AR 연체 보고서 요약문
12. 연말 재무 건강 종합 레터
13. 급여 지급 요약 설명
14. 분기 리뷰 미팅 어젠다

[카테고리 3 — 세금 & 컴플라이언스 6개]
15. 세금 공제 항목별 쉬운 설명
16. 세금 시즌 준비 체크리스트 이메일
17. IRS 통지서 수신 후 클라이언트 안내문
18. 분기 예납세(Estimated Tax) 리마인더
19. 감사(Audit) 준비 체크리스트
20. 신규 직원 재무 온보딩 안내

[카테고리 4 — 비즈니스 운영 & 어드민 5개]
21. 은행 조정(Bank Reconciliation) 불일치 설명 노트
22. 회계 소프트웨어 업그레이드 제안
23. 계정과목표(Chart of Accounts) 쉬운 설명
24. 재무 목표 설정 세션 후 요약 이메일
25. 감사 종료 후 결과 요약 이메일

### HR-RECRUITER (25개)
[카테고리 1 — 채용 & 공고 작성 7개]
1. 직무 기술서 생성기 (직군 변수)
2. LinkedIn 아웃리치 메시지
3. 면접 초대 이메일
4. 최종 합격 오퍼 레터
5. 1차 서류 불합격 통보 이메일
6. 최종 면접 후 불합격 통보 이메일
7. 채용 마감/포지션 종료 공지

[카테고리 2 — 면접 & 평가 6개]
8. 행동 면접 질문 생성기 (STAR 방식)
9. 레퍼런스 체크 질문지
10. 면접 피드백 내부 요약 메모
11. 후보자 비교 평가 요약
12. 문화적 적합성(Culture Fit) 인터뷰 질문
13. 2차 면접 안내 이메일

[카테고리 3 — 성과 관리 7개]
14. 연간 성과 평가 작성기 (강점 중심)
15. 연간 성과 평가 작성기 (개선 필요 중심)
16. 90일 체크인 템플릿
17. 성과개선계획(PIP) 초안 작성기 ★
18. 목표 설정 세션 어젠다
19. 직원 포상 메시지
20. 승진 추천서 초안

[카테고리 4 — HR 어드민 & 어려운 대화 5개]
21. 해고 통보 레터 ★
22. FMLA/육아휴직 안내 이메일
23. 직장 내 불만 신고 접수 응답 레터
24. 신규 입사자 온보딩 환영 이메일
25. 퇴직자 면담(Exit Interview) 질문지

### NURSE-NP (25개) — 전체 HIPAA 블록 필수
[카테고리 1 — 핵심 임상 차팅 9개]
1. 일반 가정의학(Family Medicine) SOAP Note
2. 소아과(Pediatrics) SOAP Note
3. 노인의학(Geriatrics) SOAP Note
4. 정신건강(Psychiatric) SOAP Note ★★
5. 응급·급성기 SBAR 핸드오프
6. 만성질환 관리 추적 노트 (DM/HTN/HLD)
7. 수술 전후 체크리스트 노트
8. 외래 Follow-up 노트
9. 야간 인계(Night Shift Handoff) 요약

[카테고리 2 — 보험 & 행정 문서 치트키 7개]
10. 사전 승인 요청서(Prior Auth) — 약물용 ★★
11. 사전 승인 요청서 — 검사/시술용 ★★
12. 전과·전문의 의뢰서(Referral Letter)
13. 장애 진단서·FMLA 서류 초안
14. 보험사 거부 항소(Appeal) 레터
15. 사고 보고서(Incident Report) 서술문
16. 입원 요약·퇴원 기록

[카테고리 3 — 환자 소통 & 교육 5개]
17. 의학 전문용어 → 초등 5학년 환자 교육 자료 변환기 ★★
18. 비정상 검사 결과 안내 이메일
19. 정상 검사 결과 안내 이메일
20. 퇴원 후 주의사항 안내문
21. 복약 설명 환자 배포 자료

[카테고리 4 — 간호 과정 & 커리어 4개]
22. 간호 과정 계획서(Nursing Care Plan) 작성 보조
23. 이직용 간호사 이력서·자기소개서 에디터
24. 새 포지션 지원 커버레터
25. 전문성 개발 목표 기술서

### PARALEGAL (25개) — 법률 관련 모든 프롬프트 State 변수 필수
[카테고리 1 — 클라이언트 소통 6개]
1. 신규 의뢰인 접수 요약 이메일
2. 케이스 진행 상황 업데이트 레터
3. 마감·기한 긴급 리마인더 이메일
4. 청구서 항목 설명 이메일
5. 합의안 설명 레터
6. 사건 종결 완료 통보 레터

[카테고리 2 — 법률 문서 초안 작성 8개] ← State 변수 해당
7. Demand Letter 초안 [State] ★
8. 케이스 요약 메모 [State]
9. 디스커버리 요청서 [State]
10. 상대방 측 커뮤니케이션 초안
11. 증인 인터뷰 요약
12. 전문가 증인(Expert Witness) 브리핑 문서
13. 계약서 검토 요약 메모 [State] ★
14. 법률 리서치 요약 노트 [State]

[카테고리 3 — 케이스 관리 & 일정 6개]
15. 케이스 타임라인 요약
16. 공소시효(Statute of Limitations) 경고 메모 [State] ★
17. 법원 출두일 리마인더 이메일
18. 증거 목록 정리 요약
19. 의뢰인 정보 비밀 유지 리마인더
20. 이해충돌(Conflict of Interest) 체크 메모

[카테고리 4 — 패럴리걸 커리어 & 어드민 5개]
21. 패럴리걸 이력서·LinkedIn 에디터
22. 구직 커버레터
23. 신규 법률 사무원 온보딩 체크리스트
24. 내부 케이스 브리핑 템플릿
25. 전문 자격증(CLA/CP) 시험 학습 계획 요약

---

## 체크리스트 (완료 시 x 표시)

bookkeeper:
  [x] seo.md
  [x] prompts.md
  [x] listing.md

hr-recruiter:
  [x] seo.md
  [x] prompts.md
  [x] listing.md

nurse-np:
  [x] seo.md
  [x] prompts.md
  [x] listing.md

paralegal:
  [x] seo.md
  [x] prompts.md
  [x] listing.md

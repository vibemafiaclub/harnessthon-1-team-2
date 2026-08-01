---
name: stage-2-asset-tokens
description: PRD가 지정한 기존자산 Page를 읽기 전용으로 스캔해 색·폰트·스페이싱·규격 토큰과 컴포넌트 카탈로그를 추출한다.
---
<!-- 담당자: 최요셉 -->

# ② 기존자산 추출 — 톤앤매너를 값으로 환원한다

## 입력 (이것만 읽는다)
- `docs/PRD.md` (자산 Page 이름을 직접 파싱하거나 `01-screens.md`의 `assetPage`를 받는다)
- Penpot: **PRD가 지정한 자산 Page 1개** — `penpot.currentFile.pages` 참조로만

## 출력 (이것만 쓴다)
- `docs/artifacts/02-tokens.md`

## 🔴 읽기 전용 계약 (위반 시 남의 작업이 망가진다)
- **`penpot.openPage()` 금지.** 전환하면 실시간 공유 파일이라 **남이 보는 화면도 바뀐다.**
  `penpot.currentFile.pages.find(p => p.name === PAGE)` → `p.root` 참조로만 순회한다.
- 자산 Page에 **쓰기 금지**(생성·수정·삭제 전부).
- **PRD가 지정한 쪽만** 읽는다. 경고된 다른 자산 Page는 열지 않는다(톤이 섞인다).
- `PAGE_NAME`은 **인자 주입**. 문자열 리터럴로 박으면 심사용 PRD에서 무너진다.

## 절차

1. `assetPage`를 확보한다. 없으면 **묻고 멈춘다**(기본값으로 첫 Page를 쓰지 않는다).
2. 아래 추출기를 `use_figma`로 실행한다. **`shapes === 0`이면 성공이 아니라 실패**다 — 중단하고 보고한다.
3. 결과를 `02-tokens.md`에 **JS 상수 객체**로 적는다. (⑤가 `const TOKENS = {...}`로 그대로 붙여넣는다)
4. 컴포넌트 카탈로그(반복 패턴)를 목록화한다.
5. 🔴 **IA·용어 추출 (토큰만 뽑으면 "색만 같은 남의 앱"이 나온다)** — 아래를 반드시 함께 산출한다.

### R6. IA·어휘 추출 (필수)

색·폰트는 **외피**다. 제품의 정체성은 **정보구조와 용어**에 있다. 자산에서 아래를 뽑는다.

| 항목 | 추출 방법 | 왜 필요한가 |
|---|---|---|
| **글로벌 내비게이션** | 각 화면 **하단 110px 이내 텍스트**를 x좌표순으로 → 탭 라벨과 순서 | 신규 화면도 이 내비를 **그대로 써야** 같은 제품이 된다. 지어내면 즉시 남의 앱 |
| **메뉴 트리** | 마이페이지/설정 성격 화면의 텍스트를 y순으로 → 섹션·항목 계층 | 신규 기능이 **어디에 붙는지**(진입 경로)를 여기서 결정한다 |
| **기존 어휘 사전** | 반복 등장하는 명사·동사 (예: 관심목록·판매내역·끌올·매너온도) | 신규 화면에서 **같은 뜻이면 기존 단어를 쓴다.** 새 단어를 만들면 이질감 |
| **인접 기능 신호** | 신규 도메인과 연결될 만한 기존 기능(결제·가계부·거래내역 등) | ③의 **Why(왜 이 회사가 이걸 하는가)** 근거가 여기서 나온다 |
| **정보 단위** | 모든 항목에 공통으로 붙는 축(지역·시간·신뢰도 등) | 신규 화면의 리스트 행도 **같은 축**을 가져야 한다 |

```js
// IA 추출 (읽기 전용) — 화면별 상/중/하단 텍스트를 좌표와 함께
const p = penpot.currentFile.pages.find(x => x.name === PAGE_NAME);
return p.root.children.filter(b => b.width >= 300).map(b => {      // 노이즈 보드 제외
  const texts = [];
  const walk = n => { if (n.type === "text" && n.characters && n.characters.trim())
      texts.push({ t: n.characters.replace(/\n/g," ").slice(0,28), y: Math.round(n.y-b.y), x: Math.round(n.x-b.x) });
    const k = n.children; if (k) for (let i=0;i<k.length;i++) walk(k[i]); };
  walk(b); texts.sort((a,c) => a.y-c.y || a.x-c.x);
  return { screen: b.name,
    globalNav: texts.filter(t => t.y > b.height-110).map(t => t.t + "@" + t.x),   // 하단 = 탭바
    header:    texts.filter(t => t.y < 120).map(t => t.t),
    body:      texts.filter(t => t.y >= 120 && t.y <= b.height-110).slice(0,25).map(t => t.t) };
});
```

## 추출 규칙 (근거: 순진하게 세면 틀린 토큰이 나온다)

| 규칙 | 내용 |
|---|---|
| **R1 색** | 강조색 = HSL **채도 s>0.35 AND 명도 0.15<l<0.85** 인 것만, **면적 가중(상한 40,000)** 합산 1위. ❌ 빈도 top-N 금지 — 아이콘 조각 색이 상위를 도배해 브랜드컬러를 놓친다 |
| **R2 1px 필터** | 스페이싱·사이즈 통계에서 **`w≤2 \|\| h≤2` 제외**. 아이콘이 벡터가 아니라 1px 사각형 수천 개인 자산이 있다 |
| **R3 규격** | `artboard {w,h}` = 자산 화면들의 **최빈 폭** + 그 폭에서의 최빈 높이. ❌ 375/390 하드코딩 금지 |
| **R4 폰트** | `fontPrimary`(원본) + `fontResolved`(서버 존재 확인 후 실제 쓸 것) **2필드 필수**. 정확일치로만 조회 — **`findByName("Inter")`는 `Inter Tight`를 돌려준다**. 라틴 폰트엔 한글 글리프가 없으니 `fontResolvedKo` 별도 |
| **R5 좌표** | 산출물엔 **board 기준 상대좌표만**. 자산 Page마다 절대좌표계가 완전히 다르다 |

## 추출기 (그대로 실행)

```js
const PAGE_NAME = ARGS_ASSET_PAGE;                       // ← 인자 주입 (리터럴 금지)
if (!PAGE_NAME) return { error: "asset page not specified", candidates: penpot.currentFile.pages.map(p=>p.name) };
const p = penpot.currentFile.pages.find(x => x.name === PAGE_NAME);
if (!p) return { error: "page not found: " + PAGE_NAME, candidates: penpot.currentFile.pages.map(x=>x.name) };
const root = p.root;                                     // ⚠️ p.children 은 undefined — 조용한 빈 배열 사고

const listOf = (v) => { if (!v || typeof v.length !== "number") return [];   // fills/strokes는 배열 아닌 프록시
  const a=[]; for (let i=0;i<v.length;i++) a.push(v[i]); return a; };
const isHex = c => typeof c === "string" && /^#[0-9a-fA-F]{6}$/.test(c);
const hsl = (h) => { const r=parseInt(h.slice(1,3),16)/255,g=parseInt(h.slice(3,5),16)/255,b=parseInt(h.slice(5,7),16)/255;
  const mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2;
  return { s: mx===mn?0:(l>0.5?(mx-mn)/(2-mx-mn):(mx-mn)/(mx+mn)), l }; };
const bump=(o,k,v)=>{ if(k===undefined||k===null||k==="")return; o[k]=(o[k]||0)+(v===undefined?1:v); };
const top=(o,k)=>Object.entries(o).sort((a,b)=>b[1]-a[1]).slice(0,k);

const accArea={}, neutral={}, strokeCnt={}, fonts={}, radii={}, gaps={}, heights={};
let shapes=0, texts=0;
const TINY = n => (n.width||0) <= 2 || (n.height||0) <= 2;              // R2
const walk = (n) => {
  shapes++;
  const area = Math.min((n.width||0)*(n.height||0), 40000);             // R1 면적 상한
  for (const f of listOf(n.fills)) { if (!isHex(f.fillColor)) continue;
    const {s,l} = hsl(f.fillColor);
    if (s>0.35 && l>0.15 && l<0.85) bump(accArea, f.fillColor, area); else bump(neutral, f.fillColor); }
  for (const st of listOf(n.strokes)) if (isHex(st.strokeColor)) bump(strokeCnt, st.strokeColor);
  if (n.type === "text") { texts++; bump(fonts, `${n.fontFamily}|w${n.fontWeight}|${n.fontSize}`); }
  if (typeof n.borderRadius === "number" && n.borderRadius>0 && !TINY(n)) bump(radii, n.borderRadius);
  if (n.type !== "text" && !TINY(n)) { const h=Math.round(n.height); if (h>0&&h<=80) bump(heights,h); }
  const kids = n.children;
  if (kids && kids.length) {
    const sorted = [...kids].filter(k => !TINY(k)).sort((a,b)=>a.y-b.y);
    for (let i=1;i<sorted.length;i++){ const g=Math.round(sorted[i].y-(sorted[i-1].y+sorted[i-1].height));
      if (g>0&&g<=64) bump(gaps,g); }
    for (let i=0;i<kids.length;i++) walk(kids[i]);
  }
};
const screens = root.children.map(b => { walk(b);
  return { assetName:b.name, w:Math.round(b.width), h:Math.round(b.height), kids:(b.children||[]).length,
           layout: b.flex ? "flex" : (b.grid ? "grid" : null) }; });
if (shapes === 0) return { error: "scan returned 0 shapes — 실패로 간주하고 중단", page: PAGE_NAME };

const wCnt={}; screens.forEach(s=>bump(wCnt,s.w)); const artW=Number(top(wCnt,1)[0][0]);   // R3
const hCnt={}; screens.filter(s=>s.w===artW).forEach(s=>bump(hCnt,s.h)); const artH=Number(top(hCnt,1)[0][0]);

const FALLBACK = { "Airbnb Cereal App":"Inter", "SF Pro Text":"Inter", "SF Pro Display":"Inter" };
const primary = top(fonts,1)[0][0].split("|")[0];
const exact = nm => penpot.fonts.all.find(f => f.name === nm) || null;    // ⚠️ findByName은 부분일치
const rf = exact(primary) || exact(FALLBACK[primary]||"") || exact("Inter");
const ko = (exact("Pretendard") || exact("Noto Sans KR"));

return { page:PAGE_NAME, shapes, texts, artboard:{w:artW,h:artH}, screens,
  color:{ accent: top(accArea,3).map(([hex,a])=>({hex,areaScore:Math.round(a)})),
          neutral: top(neutral,8), divider: top(strokeCnt,5) },
  font:{ fontPrimary:primary, fontResolved:rf.name, fontResolvedKo:ko?ko.name:null,
         substituted: primary !== rf.name, weights: rf.variants.map(v=>v.fontWeight), scale: top(fonts,14) },
  radius: top(radii,8), spacing:{ gaps: top(gaps,10), rowHeights: top(heights,8) } };
```

## 출력 형식 (`02-tokens.md`)

```markdown
## TOKENS  ← ⑤가 그대로 붙여넣는 JS 상수
const TOKENS = {
  artboard: { w: …, h: … },
  color: { accent:"#…", accentSoft:"#…", text:"#…", textSub:"#…", surface:"#…", bg:"#…", divider:"#…" },
  font: { primary:"…", resolved:"…", resolvedKo:"…", substituted: false, weights:[…], sizes:[…] },
  radius: { sm:…, md:…, pill:100 },
  space: { xs:…, sm:…, md:…, lg:… },
  rowHeight: { list:…, tab:… }
};

## 폰트 해석
| fontPrimary | fontResolved | substituted | 사용 가능 weight |

## 화면 인벤토리(자산)
| assetName | w×h | 자식 수 | 관찰된 패턴 |

## 컴포넌트 카탈로그 (⑤가 만들 것)
| 이름(YS-…) | 자산 근거 | 구성 | 반복 위치 |

## 다음 단계가 이 파일에서 뽑아 쓸 것
- ④: TOKENS 키 이름(값이 아니라 키로 참조하게 한다), artboard, 컴포넌트 카탈로그
- ⑤: TOKENS 상수 전체, font.resolved / resolvedKo
- ⑥: substituted 여부(원본 폰트가 아니면 채점 시 명시)
```

## 금지
- **`openPage` 금지 · 자산 Page 쓰기 금지 · 지정되지 않은 자산 Page 읽기 금지.**
- 빈도 top-N만으로 브랜드컬러 결정 금지(R1 위반).
- 색 이름·규격·폰트명 하드코딩 금지. 전부 스캔 산출값이어야 한다.
- `shapes === 0`을 성공으로 처리 금지.
- 다른 단계의 출력 파일을 쓰지 않는다.

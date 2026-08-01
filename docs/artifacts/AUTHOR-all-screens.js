/* ============================================================================
 * 당근증권 — 전 화면 저작 스크립트 (Penpot use_figma용)
 * 작업 Page: "최요셉"  ·  STEP 단위로 나눠 실행한다(한 번에 몰아 실행 금지)
 * 배치 순서(좌→우): Concept → Menu → Splash → Home → StockDetail → Watchlist
 *                  → Discover → Community → States   /  컴포넌트 보관소 x=4200
 * ==========================================================================*/

/* ── STEP 0. Page 게이트 (전환 전용 호출) ────────────────────────────────── */
const pg = penpot.currentFile.pages.find(p => p.name === "최요셉");
if (!pg) return { error: "page not found" };
penpot.openPage(pg);
return { switched: pg.name };


/* ── STEP 1. 정리 — 테스트물·고아 노드 삭제 (ID 직접 지정: 순회 타임아웃 회피) */
const KILL = [
  "05204af3-f757-8072-8008-69ccdf0ceeaa", // Rectangle (파란 테스트 상자)
  "05204af3-f757-8072-8008-69d266d3abf9", // YS-test-card
  "05204af3-f757-8072-8008-6a3e46ae33bd","05204af3-f757-8072-8008-6a3e46d8281a",
  "05204af3-f757-8072-8008-6a3e473b42ab","05204af3-f757-8072-8008-6a3e4757d14f",
  "05204af3-f757-8072-8008-6a3e477336cc","05204af3-f757-8072-8008-6a3e478e96ec", // 고아 ticker ×6
  "05204af3-f757-8072-8008-6a437f1c735a","05204af3-f757-8072-8008-6a437f4bf9ed",
  "05204af3-f757-8072-8008-6a437f731a6a","05204af3-f757-8072-8008-6a437fa26882",
  "05204af3-f757-8072-8008-6a437fd11b23"  // 고아 thumb-symbol ×5
];
const done = [];
KILL.forEach(id => { const s = penpotUtils.findShapeById(id); if (s) { done.push(s.name); try { s.remove(); } catch(e){} } });
return { removed: done.length };


/* ── STEP 2. 재배치 — 리뷰 동선대로 좌→우 정렬 ──────────────────────────── */
const POS = {
  "New / Concept":     [0,    0],
  "New / Menu":        [450,  0],
  "New / Splash":      [900,  0],
  "New / Home":        [1350, 0],
  "New / StockDetail": [1800, 0],
  "New / Watchlist":   [2250, 0],
  "New / Discover":    [2700, 0],
  "New / Community":   [3150, 0],
  "New / States":      [3600, 0]
};
const LEGACY = ["YS-StockRow","YS-Chip","YS-SectionHeader","YS-TabBar","YS-StockCard"]; // 구버전 → 보관소
const moved = [];
Object.keys(POS).forEach(n => {
  const s = penpotUtils.findShape(x => x.name === n, penpot.currentPage.root);
  if (s && !s.parent.parent) { s.x = POS[n][0]; s.y = POS[n][1]; moved.push(n); }
});
let ly = 0;
["YS-TabBar2","YS-StockCard2"].concat(LEGACY).forEach(n => {
  const s = penpotUtils.findShape(x => x.name === n, penpot.currentPage.root);
  if (s && !s.parent.parent) { s.x = 4200; s.y = ly; ly += s.height + 40; }
});
return { moved };


/* ── STEP 3. 공통 토큰·헬퍼 주입 (재접속 시 storage가 비므로 항상 먼저) ──── */
storage.T = {
  artboard: { w:390 },
  color: { accent:"#FF7E36", accentSoft:"#FFEBE0", text:"#000000", textSub:"#8C8C8C",
           textTert:"#5E5E5E", surface:"#FFFFFF", bg:"#F6F6F6", bgGray:"#F2F3F5",
           divider:"#EEEEEE", dark:"#14161A" },
  semantic: { up:"#E8342A", down:"#1E5EFF", chart:"#FF7E36" },     // 상승 빨강 / 하락 파랑
  font: { sizes:{ caption:12, meta:14, body:15, item:17, section:20, title:24, display:28, hero:32 } },
  radius: { sm:8, md:12, lg:16, xl:20, pill:100 },
  space: { xxs:4, xs:8, sm:12, md:16, lg:20, xl:28 },
  weight: { normal:400, medium:500, bold:700, black:800 }
};
const exact = n => penpot.fonts.all.find(f => f.name === n) || null;
storage.FONT = { lat: exact("Inter"), ko: exact("Pretendard"), head: exact("Jua") };
if (!storage.FONT.ko || !storage.FONT.head) return { error: "font missing" };

storage.H = {
  fill: hex => [{ fillColor: hex, fillOpacity: 1 }],
  t(chars, o) {
    o = o || {}; const T = storage.T;
    const t = penpot.createText(String(chars));
    t.name = o.name || "t";
    const size = o.size || T.font.sizes.body, weight = o.weight || T.weight.normal;
    t.resize(o.w || 300, size * 1.6);
    const f = /[ㄱ-힝]/.test(String(chars)) ? storage.FONT.ko : storage.FONT.lat;
    const v = f.variants.find(x => x.fontWeight === String(weight) && x.fontStyle === "normal")
           || f.variants.find(x => x.fontWeight === "700" && x.fontStyle === "normal");
    f.applyToText(t, v);
    t.fontSize = size; t.growType = "auto-height";
    t.fills = storage.H.fill(o.color || T.color.text);
    if (o.align) t.align = o.align;
    if (o.lh) t.lineHeight = o.lh;
    return t;
  },
  head(chars, o) {                                  // 제목 = Jua (두껍고 둥근 고딕)
    o = o || {}; const T = storage.T;
    const t = penpot.createText(String(chars));
    t.name = o.name || "head";
    const size = o.size || 24;
    t.resize(o.w || 300, size * 1.5);
    const f = storage.FONT.head;
    f.applyToText(t, f.variants[0]);
    t.fontSize = size; t.growType = "auto-height";
    t.fills = storage.H.fill(o.color || T.color.text);
    if (o.align) t.align = o.align;
    if (o.lh) t.lineHeight = o.lh;
    return t;
  },
  rect(name, w, h, hex, r) {
    const x = penpot.createRectangle();
    x.name = name; x.resize(w, h);
    x.fills = hex ? storage.H.fill(hex) : [];
    if (r !== undefined) x.borderRadius = r;
    return x;
  },
  box(name, w, h, o) {
    o = o || {};
    const b = penpot.createBoard();
    b.name = name; b.resize(w, h);
    b.fills = o.fill ? storage.H.fill(o.fill) : [];
    if (o.radius !== undefined) b.borderRadius = o.radius;
    if (o.stroke) b.strokes = [{ strokeColor:o.stroke, strokeOpacity:1, strokeWidth:1, strokeAlignment:"inner" }];
    if (o.dir) {
      const fx = b.addFlexLayout();
      fx.dir = o.dir;
      fx.rowGap = o.gap || 0; fx.columnGap = o.gap || 0;
      if (o.pad !== undefined) { fx.horizontalPadding = o.pad; fx.verticalPadding = o.pad; }
      if (o.padH !== undefined) fx.horizontalPadding = o.padH;
      if (o.padV !== undefined) fx.verticalPadding = o.padV;
      if (o.justify) fx.justifyContent = o.justify;
      if (o.alignItems) fx.alignItems = o.alignItems;
      if (o.hSize) fx.horizontalSizing = o.hSize;
      if (o.vSize) fx.verticalSizing = o.vSize;
    }
    return b;
  },
  fillW(n) { if (n.layoutChild) n.layoutChild.horizontalSizing = "fill"; return n; },
  // 하단 고정 요소: absolute 자식은 x/y가 캔버스 절대좌표로 먹으므로 setParentXY 사용
  pin(board, node, px, py) {
    board.appendChild(node);
    if (node.layoutChild) node.layoutChild.absolute = true;
    penpotUtils.setParentXY(node, px, py);
    return node;
  },
  statusBar(board, time) {
    const T = storage.T;
    const sb = storage.H.box("StatusBar", 390, 44, { dir:"row", padH:T.space.md, justify:"space-between", alignItems:"center" });
    board.appendChild(sb);
    sb.appendChild(storage.H.t(time || "3:27", { size:T.font.sizes.meta, weight:T.weight.bold, w:60 }));
    sb.appendChild(storage.H.rect("indicators", 54, 12, T.color.text, 2));
    return sb;
  }
};
return { ready:true, fonts:[storage.FONT.lat.name, storage.FONT.ko.name, storage.FONT.head.name] };


/* ── STEP 4. New/Menu — 나의 당근 전체 서비스에 '증권' 추가 (IA 진입점 증명) ─ */
/* 실제 앱 캡처 문법: 연회색 배경 + 흰 카드(radius 20) + 2열 서비스 그리드     */
{
const T = storage.T, H = storage.H, F = T.font.sizes, W = T.weight, SP = T.space;
const S = H.box("New/Menu", 390, 1000, { fill:T.color.bgGray, dir:"column", gap:SP.sm });
S.x = 450; S.y = 0;
H.statusBar(S, "3:27");

const hd = H.box("Header", 390, 60, { dir:"row", padH:SP.md, justify:"space-between", alignItems:"center" });
S.appendChild(hd);
hd.appendChild(H.t("나의 당근", { size:F.display, weight:W.black, w:220 }));
hd.appendChild(H.rect("gear", 24, 24, null, 6));

/* 프로필 카드 */
const pc = H.box("ProfileWrap", 390, 96, { dir:"column", padH:SP.md });
S.appendChild(pc);
const pcard = H.box("ProfileCard", 358, 88, { fill:T.color.surface, radius:T.radius.xl, dir:"row", gap:SP.sm,
  pad:SP.md, alignItems:"center" });
pc.appendChild(pcard); H.fillW(pcard);
pcard.appendChild(H.rect("avatar", 52, 52, T.color.bgGray, T.radius.pill));
const pinfo = H.box("info", 200, 30, { dir:"row", gap:SP.xs, alignItems:"center" });
pcard.appendChild(pinfo); H.fillW(pinfo);
pinfo.appendChild(H.t("스타트앤드", { size:F.section, weight:W.bold, w:110 }));
const temp = H.box("temp", 66, 26, { fill:T.color.accentSoft, radius:T.radius.sm, dir:"row", justify:"center", alignItems:"center" });
pinfo.appendChild(temp);
temp.appendChild(H.t("40.3℃", { size:F.caption, weight:W.bold, color:T.color.accent, w:56, align:"center" }));
pcard.appendChild(H.t("›", { size:F.section, color:T.color.textSub, w:14, align:"right" }));

/* 당근페이 카드 — '투자' 진입 라인 포함 */
const payW = H.box("PayWrap", 390, 164, { dir:"column", padH:SP.md });
S.appendChild(payW);
const pay = H.box("PayCard", 358, 156, { fill:T.color.surface, radius:T.radius.xl, dir:"column", gap:SP.sm, pad:SP.md });
payW.appendChild(pay); H.fillW(pay);
const payTop = H.box("row", 326, 28, { dir:"row", justify:"space-between", alignItems:"center" });
pay.appendChild(payTop); H.fillW(payTop);
payTop.appendChild(H.head("pay", { size:22, color:T.color.accent, w:60 }));
payTop.appendChild(H.t("충전  |  송금  |  결제", { size:F.body, weight:W.bold, w:200, align:"right" }));
const payIn = H.box("inner", 326, 56, { fill:T.color.bgGray, radius:T.radius.md, dir:"row", padH:SP.md,
  justify:"space-between", alignItems:"center" });
pay.appendChild(payIn); H.fillW(payIn);
payIn.appendChild(H.t("머니 184,000원 ›", { size:F.body, weight:W.bold, w:160 }));
payIn.appendChild(H.t("포인트 0원 ›", { size:F.body, weight:W.bold, color:T.color.textSub, w:130, align:"right" }));
const invest = H.box("InvestRow", 326, 36, { dir:"row", justify:"space-between", alignItems:"center" });
pay.appendChild(invest); H.fillW(invest);
invest.appendChild(H.t("투자  ·  내 투자금 1,284,000원", { size:F.body, weight:W.bold, color:T.color.accent, w:250 }));
invest.appendChild(H.t("›", { size:F.section, color:T.color.accent, w:14, align:"right" }));

/* 전체 서비스 그리드 (2열) — '증권' 신규 항목 포함 */
const svW = H.box("ServicesWrap", 390, 400, { dir:"column", padH:SP.md });
S.appendChild(svW);
const sv = H.box("ServicesCard", 358, 392, { fill:T.color.surface, radius:T.radius.xl, dir:"column", gap:SP.md, pad:SP.md });
svW.appendChild(sv); H.fillW(sv);
const svTop = H.box("row", 326, 28, { dir:"row", justify:"space-between", alignItems:"center" });
sv.appendChild(svTop); H.fillW(svTop);
svTop.appendChild(H.t("전체 서비스", { size:F.section, weight:W.bold, w:200 }));
svTop.appendChild(H.t("›", { size:F.section, color:T.color.textSub, w:14, align:"right" }));
const ITEMS = [["증권", true], ["중고거래", false], ["부동산", false], ["중고차", false],
               ["알바", false], ["동네가게", false], ["모임", false], ["공동구매", false]];
for (let r = 0; r < 4; r++) {
  const row = H.box("grid-row-"+r, 326, 64, { dir:"row", gap:SP.md, alignItems:"center" });
  sv.appendChild(row); H.fillW(row);
  [0,1].forEach(c => {
    const it = ITEMS[r*2+c]; if (!it) return;
    const cell = H.box("svc", 155, 56, { dir:"row", gap:SP.sm, alignItems:"center" });
    row.appendChild(cell); H.fillW(cell);
    cell.appendChild(H.rect("icon", 36, 36, it[1] ? T.color.accentSoft : T.color.bgGray, T.radius.md));
    cell.appendChild(H.t(it[0], { size:F.item, weight:W.bold, color: it[1] ? T.color.accent : T.color.text, w:100 }));
  });
}
S.resize(390, S.children.reduce((a,c) => a + c.height, 0) + 120);
storage.SMenu = S.id;
return { ok:true, id:S.id, h:Math.round(S.height) };
}


/* ── STEP 5. New/Splash — 당근부동산 스플래시 문법 ─────────────────────── */
/* 상단 흰 여백 → 심볼 → 2줄 카피 → 하단 3D 클레이 장면(코덱스 PNG)          */
{
const T = storage.T, H = storage.H, F = T.font.sizes, W = T.weight;
const S = H.box("New/Splash", 390, 844, { fill:T.color.surface, dir:"column", gap:0 });
S.x = 900; S.y = 0;
H.statusBar(S, "3:31");
const top = H.box("SplashTop", 390, 420, { dir:"column", gap:16, padV:120, alignItems:"center" });
S.appendChild(top);
top.appendChild(H.rect("symbol", 84, 84, T.color.accent, 24));   // symbol-stock.svg 로 교체 예정
top.appendChild(H.head("주식 시작할땐", { size:30, w:330, align:"center" }));
top.appendChild(H.head("당근증권", { size:30, color:T.color.accent, w:330, align:"center" }));
/* 하단 장면: assets/splash-scene.png 을 import_image 로 붙인다 (별도 호출) */
const scene = H.rect("SceneSlot", 390, 380, T.color.accentSoft, 0);
S.appendChild(scene);
storage.SSplash = S.id;
return { ok:true, id:S.id, note:"splash-scene.png 은 import_image 로 SceneSlot 위치에 배치" };
}


/* ── STEP 6. New/Home — 첫 화면 (토스 ①내 투자금 ②현황 ③관심 × 당근 판돈·동네) */
{
const T = storage.T, H = storage.H, F = T.font.sizes, W = T.weight, SP = T.space;
const S = H.box("New/Home", 390, 1600, { fill:T.color.surface, dir:"column", gap:0 });
S.x = 1350; S.y = 0;
H.statusBar(S, "3:34");

/* 헤더 */
const hd = H.box("Header", 390, 60, { dir:"row", padH:SP.md, justify:"space-between", alignItems:"center" });
S.appendChild(hd);
hd.appendChild(H.head("당근증권", { size:26, w:200 }));
const hr = H.box("actions", 60, 24, { dir:"row", gap:SP.md, alignItems:"center", justify:"end" });
hd.appendChild(hr);
hr.appendChild(H.rect("search", 22, 22, null, 6));
hr.appendChild(H.rect("bell", 22, 22, null, 6));

/* ① 내 투자 현황 카드 */
const pw = H.box("PortfolioWrap", 390, 240, { dir:"column", padH:SP.md, padV:SP.xs });
S.appendChild(pw);
const pc = H.box("PortfolioCard", 358, 228, { fill:T.color.surface, radius:T.radius.xl, dir:"column", gap:SP.sm,
  pad:SP.md, stroke:T.color.divider });
pw.appendChild(pc); H.fillW(pc);
pc.appendChild(H.t("내 투자금", { size:F.body, weight:W.bold, color:T.color.textTert, w:320 }));
pc.appendChild(H.t("1,284,000원", { size:F.hero, weight:W.black, w:320 }));
pc.appendChild(H.t("오늘 +18,400원 (+1.5%)", { size:F.body, weight:W.bold, color:T.semantic.up, w:320 }));
pc.appendChild(H.rect("ChartSlot", 326, 72, T.color.bg, T.radius.md));   // chart-portfolio-up.svg 로 교체
const pin = H.box("inner", 326, 56, { fill:T.color.bgGray, radius:T.radius.md, dir:"row", padH:SP.md,
  justify:"space-between", alignItems:"center" });
pc.appendChild(pin); H.fillW(pin);
const c1 = H.box("c1", 150, 40, { dir:"column", gap:2 });
pin.appendChild(c1);
c1.appendChild(H.t("당근에서 번 돈", { size:F.caption, color:T.color.textSub, w:140 }));
c1.appendChild(H.t("184,000원", { size:F.item, weight:W.black, color:T.color.accent, w:140 }));
const c2 = H.box("c2", 150, 40, { dir:"column", gap:2 });
pin.appendChild(c2);
c2.appendChild(H.t("투자에 쓴 돈", { size:F.caption, color:T.color.textSub, w:140, align:"right" }));
c2.appendChild(H.t("1,100,000원", { size:F.item, weight:W.black, w:140, align:"right" }));

/* ② 우리동네 시그널 배너 (토스 AI 시그널 → 지역 번역) */
const sw = H.box("SignalWrap", 390, 108, { dir:"column", padH:SP.md, padV:SP.xs });
S.appendChild(sw);
const sig = H.box("SignalCard", 358, 96, { fill:T.color.accentSoft, radius:T.radius.lg, dir:"column", gap:SP.xxs, pad:SP.md });
sw.appendChild(sig); H.fillW(sig);
sig.appendChild(H.t("우리동네 시그널 ›", { size:F.body, weight:W.bold, color:T.color.accent, w:320 }));
sig.appendChild(H.t("군자동에서 오늘 SK하이닉스를 12명이 담았어요", { size:F.item, weight:W.bold, w:320 }));

/* ③ 관심목록 (토스 위계: 등락률 > 가격, 우측 2줄) */
storage.mkQuoteRow = function(parent, name, sub, rate, price, dir) {
  const T = storage.T, H = storage.H, F = T.font.sizes, W = T.weight, SP = T.space;
  const row = H.box("QuoteRow", 390, 72, { dir:"row", gap:SP.sm, padH:SP.md, padV:SP.xs, alignItems:"center" });
  parent.appendChild(row);
  row.appendChild(H.rect("logo", 40, 40, T.color.bg, T.radius.pill));
  const l = H.box("l", 180, 44, { dir:"column", gap:2 });
  row.appendChild(l); H.fillW(l);
  l.appendChild(H.t(name, { size:F.item, weight:W.bold, w:170 }));
  if (sub) l.appendChild(H.t(sub, { size:F.caption, color:T.color.textSub, w:170 }));
  const r = H.box("r", 110, 44, { dir:"column", gap:2 });
  row.appendChild(r);
  r.appendChild(H.t(rate, { size:F.section, weight:W.black, color:T.semantic[dir], w:106, align:"right" }));
  r.appendChild(H.t(price, { size:F.meta, color:T.color.textSub, w:106, align:"right" }));
  return row;
};
const sh1 = H.box("SecHead1", 390, 52, { dir:"row", padH:SP.md, justify:"space-between", alignItems:"center" });
S.appendChild(sh1);
sh1.appendChild(H.t("관심목록", { size:F.section, weight:W.bold, w:200 }));
sh1.appendChild(H.t("표로 자세히보기 ›", { size:F.meta, color:T.color.textSub, w:150, align:"right" }));
const wl = H.box("WatchList", 390, 216, { dir:"column", gap:0 });
S.appendChild(wl);
storage.mkQuoteRow(wl, "삼성전자", null, "+2.3%", "74,200원", "up");
storage.mkQuoteRow(wl, "SK하이닉스", null, "+3.1%", "198,500원", "up");
storage.mkQuoteRow(wl, "한화에어로스페이스", null, "-1.1%", "312,000원", "down");

/* ④ 우리동네 인기 종목 + 지역 필터 */
const sh2 = H.box("SecHead2", 390, 52, { dir:"row", padH:SP.md, justify:"space-between", alignItems:"center" });
S.appendChild(sh2);
sh2.appendChild(H.t("우리동네 인기 종목", { size:F.section, weight:W.bold, w:220 }));
const fc = H.box("RegionChips", 390, 56, { dir:"row", gap:SP.xs, padH:SP.md, padV:SP.xs, alignItems:"center" });
S.appendChild(fc);
[["군자동 ⌄",true],["광진구 ⌄",false],["오른 것만",false]].forEach(c => {
  const chip = H.box("chip", 96, 34, { fill: c[1] ? T.color.text : T.color.bgGray, radius:T.radius.pill,
    dir:"row", justify:"center", alignItems:"center" });
  fc.appendChild(chip);
  chip.appendChild(H.t(c[0], { size:F.meta, weight:W.bold, color: c[1] ? T.color.surface : T.color.textTert, w:88, align:"center" }));
});
const nl = H.box("NeighborList", 390, 216, { dir:"column", gap:0 });
S.appendChild(nl);
storage.mkQuoteRow(nl, "SK하이닉스", "우리동네 12명 관심", "+3.1%", "198,500원", "up");
storage.mkQuoteRow(nl, "삼성전자", "우리동네 9명 관심", "+2.3%", "74,200원", "up");
storage.mkQuoteRow(nl, "현대차", "우리동네 6명 관심", "+1.2%", "241,000원", "up");

/* ⑤ 이웃들은 왜 담았을까? (토스 "왜 움직였을까?" 번역) */
const ww = H.box("WhyWrap", 390, 172, { fill:T.color.bgGray, dir:"column", gap:SP.xs, padH:SP.md, padV:SP.md });
S.appendChild(ww);
const wTop = H.box("row", 358, 24, { dir:"row", justify:"space-between", alignItems:"center" });
ww.appendChild(wTop); H.fillW(wTop);
wTop.appendChild(H.t("이웃들은 왜 담았을까?", { size:F.item, weight:W.bold, color:T.color.accent, w:220 }));
wTop.appendChild(H.t("19시간 전", { size:F.caption, color:T.color.textSub, w:80, align:"right" }));
ww.appendChild(H.t("반도체 수출 규제가 풀린다는 소식에 군자동 이웃 12명이 오늘 SK하이닉스를 담았어요.",
  { size:F.item, weight:W.bold, w:350, lh:1.5 }));
ww.appendChild(H.t("SK하이닉스 외 1개 종목과 연관", { size:F.meta, color:T.color.textSub, w:350 }));

const total = S.children.reduce((a,c) => a + c.height, 0);
S.resize(390, total + 100);
storage.SHome = S.id;
return { ok:true, id:S.id, h:Math.round(S.height) };
}


/* ── STEP 7. 탭바 붙이기 (모든 앱 화면 공통) ───────────────────────────── */
{
const H = storage.H;
const comp = penpot.library.local.components.find(c => c.name === "YS-TabBar2");
["SHome","SMenu"].forEach(k => {
  const b = penpotUtils.findShapeById(storage[k]); if (!b) return;
  const inst = comp.instance();
  H.pin(b, inst, 0, b.height - 68);
});
return { attached: true };
}


/* ── STEP 8. New/Community — 동네 주식방 ───────────────────────────────── */
{
const T = storage.T, H = storage.H, F = T.font.sizes, W = T.weight, SP = T.space;
const S = H.box("New/Community", 390, 1500, { fill:T.color.surface, dir:"column", gap:0 });
S.x = 3150; S.y = 0;
H.statusBar(S, "3:36");

const hd = H.box("Header", 390, 60, { dir:"row", padH:SP.md, justify:"space-between", alignItems:"center" });
S.appendChild(hd);
hd.appendChild(H.head("동네 주식방", { size:26, w:220 }));
hd.appendChild(H.rect("write", 24, 24, null, 6));
const loc = H.box("Location", 390, 40, { dir:"row", padH:SP.md, alignItems:"center" });
S.appendChild(loc);
loc.appendChild(H.t("군자동 ⌄", { size:F.body, weight:W.bold, color:T.color.textTert, w:120 }));

const cats = H.box("Categories", 390, 56, { dir:"row", gap:SP.xs, padH:SP.md, padV:SP.xs, alignItems:"center" });
S.appendChild(cats);
[["우리동네 투자",true],["같이 배워요",false],["투자 질문",false],["성공담",false]].forEach(c => {
  const chip = H.box("cat", 104, 36, { fill: c[1] ? T.color.text : T.color.bgGray, radius:T.radius.pill,
    dir:"row", justify:"center", alignItems:"center", hSize:"auto", padH:SP.sm });
  cats.appendChild(chip);
  chip.appendChild(H.t(c[0], { size:F.meta, weight:W.bold, color: c[1] ? T.color.surface : T.color.textTert, w:92, align:"center" }));
});

const POSTS = [
  ["투자 질문","Q. 이번 달 당근에서 번 돈으로 처음 사보려는데요",
   "18만원 정도 있는데 한 종목에 다 넣는 게 나을까요? 나눠 담는 게 나을까요?",
   "요우우 · 화양동 · 3분 전 · 40.3℃","공감 4   댓글 7", null],
  ["우리동네 투자","군자동에서 이번 주에 제일 많이 담은 종목",
   "SK하이닉스가 12명으로 1등이에요. 저도 따라 3주 담았어요.",
   "도우영 · 군자동 · 15분 전 · 38.5℃","공감 12   댓글 5", "SK하이닉스"],
  ["같이 배워요","주식 처음이신 분들 같이 공부해요",
   "매주 목요일 저녁에 카페에서 만나서 같이 봐요. 초보 환영이에요.",
   "감성탐방러 · 중곡동 · 1시간 전","공감 8   댓글 3", "2/4명 참여"],
  ["실패담","고점에 물렸어요… 같이 버티실 분",
   "작년에 사서 아직도 마이너스예요. 그래도 배운 게 있어서 적어봐요.",
   "누룽지 · 면목동 · 2시간 전 · 36.5℃","공감 21   댓글 14", null],
  ["성공담","중고 자전거 판 돈으로 산 게 올랐어요",
   "4만원으로 시작했는데 두 달 만에 5만원 됐어요. 소소하지만 기분 좋네요.",
   "kenny · 구의동 · 어제","공감 33   댓글 9", null]
];
const list = H.box("PostList", 390, 10, { dir:"column", gap:0 });
S.appendChild(list);
let hsum = 0;
POSTS.forEach((p, i) => {
  const hh = p[5] ? 196 : 164;
  const card = H.box("PostCard", 390, hh, { dir:"column", gap:SP.xxs, padH:SP.md, padV:SP.md });
  list.appendChild(card);
  card.appendChild(H.t(p[0], { size:F.caption, weight:W.bold, color:T.color.accent, w:200 }));
  card.appendChild(H.t(p[1], { size:F.item, weight:W.bold, w:350, lh:1.4 }));
  card.appendChild(H.t(p[2], { size:F.body, color:T.color.textTert, w:350, lh:1.5 }));
  if (p[5]) {
    const tag = H.box("tag", 110, 28, { fill:T.color.bgGray, radius:T.radius.sm, dir:"row",
      justify:"center", alignItems:"center", hSize:"auto", padH:10 });
    card.appendChild(tag);
    tag.appendChild(H.t(p[5], { size:F.caption, weight:W.bold, color:T.color.textTert, w:96, align:"center" }));
  }
  card.appendChild(H.t(p[3], { size:F.meta, color:T.color.textSub, w:350 }));
  card.appendChild(H.t(p[4], { size:F.meta, weight:W.medium, color:T.color.textSub, w:350 }));
  if (i < POSTS.length - 1) {
    const dv = H.box("DividerWrap", 390, 1, { dir:"row", padH:SP.md });
    list.appendChild(dv);
    const ln = H.rect("divider", 358, 1, T.color.divider);
    dv.appendChild(ln); H.fillW(ln);
  }
  hsum += hh + (i < POSTS.length - 1 ? 1 : 0);
});
list.resize(390, hsum);
const total = S.children.reduce((a,c) => a + c.height, 0);
S.resize(390, total + 140);

/* 플로팅 글쓰기 pill + 탭바 */
const pill = H.box("FloatingWrite", 130, 52, { fill:"#212529", radius:T.radius.pill, dir:"row",
  justify:"center", alignItems:"center", hSize:"auto", padH:SP.lg });
pill.appendChild(H.t("글쓰기", { size:F.body, weight:W.bold, color:"#FFFFFF", w:80, align:"center" }));
H.pin(S, pill, 130, S.height - 150);
const comp = penpot.library.local.components.find(c => c.name === "YS-TabBar2");
H.pin(S, comp.instance(), 0, S.height - 68);
storage.SCommunity = S.id;
return { ok:true, id:S.id, h:Math.round(S.height) };
}


/* ── STEP 9. 에셋 삽입 — 코덱스 SVG/PNG를 슬롯에 배치 ──────────────────── */
/* SVG는 penpot.createShapeFromSvg(문자열)로, PNG는 import_image 툴로 붙인다.  */
/* 슬롯: Splash/SceneSlot(splash-scene.png), Home/ChartSlot(chart-portfolio-up.svg),
 *       Menu/svc icon(service-*.svg), Community/cat icon(cat-*.svg)              */


/* ── STEP 10. export — 화면별 PNG (한 번에 하나씩, 실패 시 재-export 1회) ── */
/* docs/artifacts/exports/{slug}-r{n}.png                                        */

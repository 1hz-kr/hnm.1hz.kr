<script setup lang="ts">
// 면판 종류 선택 카드. 각 카드의 면발 두께/간격/색은 CSS 변수로 제어한다.
interface Noodle {
  name: string // 면 이름
  ko: string // 로마자 표기
  flat: boolean // 납작면 여부
  style: string // 면발 CSS 변수(--w/--gap/--str)
  gaugeLabel: string // 게이지 라벨
  gaugeValue: string // 게이지 값
}
const noodles: Noodle[] = [
  { name: '칼국수', ko: 'KALGUKSU', flat: true, style: '--w:20px;--gap:6px;', gaugeLabel: '납작', gaugeValue: '칼선' },
  { name: '우동', ko: 'UDON', flat: false, style: '--w:12px;--gap:9px;', gaugeLabel: '굵기', gaugeValue: '●●●●○' },
  { name: '도삭면', ko: 'DOSAK', flat: true, style: '--w:24px;--gap:7px;', gaugeLabel: '넓은', gaugeValue: '도삭' },
  { name: '중식면', ko: 'JUNGSIK', flat: false, style: '--w:5px;--gap:6px;', gaugeLabel: '가는', gaugeValue: '원형' },
  { name: '막국수', ko: 'MAKGUKSU', flat: false, style: '--w:4px;--gap:7px;--str:#cdbb8f;', gaugeLabel: '가는', gaugeValue: '막선' },
  { name: '파스타', ko: 'PASTA', flat: false, style: '--w:8px;--gap:8px;--str:#e7c96f;', gaugeLabel: '원형', gaugeValue: '파스타' },
]
</script>

<template>
  <section class="section" id="menu" style="padding-top:0;">
    <div class="wrap">
      <div class="menu-head">
        <span class="eyebrow" v-reveal>면판 20종 호환 · 한 대로 다 됩니다</span>
        <h2 class="h2" v-reveal data-reveal-d="1" style="margin-top:14px;">면판만 바꾸면,
메뉴가 넓어집니다</h2>
        <p class="lead pretty" v-reveal data-reveal-d="2" style="margin-top:14px;">칼국수·우동부터 막국수, 도삭면, 중식면, 파스타까지. <b style="color:var(--ink);font-weight:700;">면판 20종</b>을 갈아 끼우면 사실상 모든 면 요리가 한 대에서 — 신메뉴 테스트도 부담스럽지 않습니다.</p>
      </div>
      <div class="noodles">
        <a
          class="ncard"
          v-for="(n, i) in noodles"
          :key="n.name"
          v-reveal
          :data-reveal-d="i || undefined"
          href="#closer"
        >
          <div class="nprofile" :class="{ flat: n.flat }" :style="n.style">
            <div class="ndie"></div><div class="ngrid"></div><div class="nstr"></div>
            <div class="gauge">{{ n.gaugeLabel }} <b>{{ n.gaugeValue }}</b></div>
          </div>
          <div class="nin"><h4>{{ n.name }}</h4><div class="ko">{{ n.ko }}</div></div>
        </a>
      </div>
    </div>
  </section>
</template>

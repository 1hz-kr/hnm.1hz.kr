<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { CSSProperties } from 'vue'

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const timer = ref('5.0s') // HUD 타이머 표시값
const strands = ref<CSSProperties[]>([]) // 압출 면발 스타일 목록

let rafId: number | null = null

// 화면 폭에 맞춰 면발 가닥의 무작위 스타일을 생성한다.
function buildStrands() {
  const n = window.innerWidth < 640 ? 22 : 34
  const list: CSSProperties[] = []
  for (let i = 0; i < n; i++) {
    const dur = (0.85 + Math.random() * 0.6).toFixed(2)
    const delay = (-Math.random() * 1.4).toFixed(2)
    const swayDelay = (-Math.random() * 4).toFixed(2)
    const h = (78 + Math.random() * 22).toFixed(0)
    list.push({
      height: h + '%',
      animationDuration: dur + 's,' + (3.6 + Math.random() * 2).toFixed(2) + 's',
      animationDelay: delay + 's,' + swayDelay + 's',
    })
  }
  strands.value = list
}

// 0.0 → 5.0초를 반복하는 압출 타이머 루프
function startTimer() {
  if (reduce) return
  let t = 0
  let last = performance.now()
  function step(now: number) {
    const dt = (now - last) / 1000
    last = now
    t += dt * 1.2
    if (t > 5) t = 0
    timer.value = t.toFixed(1) + 's'
    rafId = requestAnimationFrame(step)
  }
  rafId = requestAnimationFrame(step)
}

onMounted(() => {
  buildStrands()
  startTimer()
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <header class="hero" id="top">
    <div class="gridbg"></div>
    <div class="hero-glow"></div>
    <div class="wrap">
      <div class="hero-inner">

        <div class="hero-head">
          <span class="eyebrow" v-reveal>전자동 즉석 자동제면기 · HNM-2000</span>
          <h1 class="display" v-reveal data-reveal-d="1" style="word-break:keep-all;">갓 뽑은 생면
<span class="amber">5초</span>에
한&nbsp;그릇.</h1>
          <p class="lead hero-lead pretty" v-reveal data-reveal-d="2"><b style="color:var(--ink);font-weight:700;">HNM-2000은 1인분 5초.</b> 즉석 반죽부터 제면까지 버튼 하나로 — 면 만드는 기술이 없어도, 좁은 주방에서도 언제나 갓 뽑은 그대로.</p>
          <div class="hero-cta" v-reveal data-reveal-d="3">
            <a class="btn btn-amber btn-lg" href="#closer">도입·창업 상담</a>
            <a class="btn btn-line btn-lg" href="#process">작동 원리 보기 <span class="arr">→</span></a>
          </div>
          <div class="hero-meta" v-reveal data-reveal-d="4">
            <span class="chip"><span class="dot"></span>즉석 반죽+제면</span>
            <span class="chip"><span class="dot"></span>1인분 5초</span>
            <span class="chip"><span class="dot"></span>분말통 일체형</span>
          </div>
        </div>

        <!-- 압출 제면 인스트루먼트 뷰포트 -->
        <div class="hero-float-wrap" v-reveal data-reveal-d="3">
          <div class="viewport" aria-hidden="true">
            <div class="vp-grid"></div>
            <div class="vp-glow"></div>
            <div class="die"></div>
            <div class="strands" id="strands">
              <span
                v-for="(s, i) in strands"
                :key="i"
                class="strand"
                :style="s"
              ></span>
            </div>
            <div class="hud">
              <span class="corner c-tl"></span><span class="corner c-tr"></span>
              <span class="corner c-bl"></span><span class="corner c-br"></span>
              <span class="tag-tl">EXTRUSION · 즉석 제면</span>
              <span class="live"><span class="dot live"></span>LIVE</span>
              <span class="ticks"></span>
              <span class="scanbar"></span>
              <span class="readout">
                <span class="big tnum">{{ timer }}</span>
                <span class="sub">HNM-2000 / 1인분</span>
              </span>
            </div>
          </div>
          <div class="float f1">
            <div class="k">즉석 제면</div>
            <div class="v tnum">5<span class="u">초</span></div>
          </div>
          <div class="float f2">
            <div class="k">면판</div>
            <div class="v tnum">20<span class="u">종</span></div>
          </div>
        </div>

      </div>

      <div class="trust" v-reveal data-reveal-d="5">
        <span><b>분식·김밥집</b></span>
        <span><b>칼국수 전문점</b></span>
        <span><b>잔치국수·국수집</b></span>
        <span><b>우동·소바 전문점</b></span>
        <span><b>막국수·냉면 전문점</b></span>
        <span><b>중식당</b></span>
        <span><b>파스타·이탈리안</b></span>
        <span><b>라멘·쌀국수 전문점</b></span>
        <span><b>포장마차·주점</b></span>
        <span><b>배달 전문 매장</b></span>
        <span><b>푸드코트·구내식당</b></span>
        <span><b>휴게소·관광지 매장</b></span>
      </div>
    </div>
  </header>
</template>

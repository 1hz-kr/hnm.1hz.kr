<script setup lang="ts">
// 대표 모델 HNM-2000 스포트라이트.
const features: string[] = [
  '1인분 5초 즉석 제면',
  '즉석 반죽 + 제면 전자동',
  '분말통 일체형 대용량 설계',
  '컬러 터치 패널 제어',
  '칼국수·우동·막국수·도삭면·중식면 대응',
]
</script>

<template>
  <section class="section" id="lineup" style="padding-top:0;">
    <div class="wrap">
      <div class="menu-head" style="text-align:center;max-width:640px;margin-inline:auto;">
        <span class="eyebrow center" v-reveal>대표 모델 · HNM-2000</span>
        <h2 class="h2" v-reveal data-reveal-d="1" style="margin-top:14px;word-break:keep-all;">한 대로 반죽부터
제면까지 전자동</h2>
        <p class="lead pretty" v-reveal data-reveal-d="2" style="margin-top:14px;">분말통 일체형 대용량과 컬러 터치 패널까지 — 즉석 반죽부터 제면까지 버튼 하나로 끝내는 한사랑의 대표 모델입니다.</p>
      </div>
      <div class="lineup single">
        <div class="plan feat-plan solo" v-reveal>
          <div class="solo-grid">
            <div class="pshot">
              <div class="badge">대표 모델</div>
              <img src="/images/HNM-2000-studio.png" alt="HNM-2000 전자동 즉석 제면기" loading="lazy" style="object-position:50% 35%;" />
            </div>
            <div class="solo-body">
              <div class="pname">FLAGSHIP · 전자동 즉석 제면기</div>
              <h3>HNM-2000</h3>
              <div class="for">즉석 반죽부터 제면까지, 한 대로 전부</div>
              <div class="speed"><span class="n tnum">5</span><span class="u">초 / 1인분</span></div>
              <ul>
                <li v-for="f in features" :key="f"><span class="tk">✓</span> {{ f }}</li>
              </ul>
              <div class="solo-cta">
                <a class="btn btn-amber btn-block" href="#closer">도입·창업 상담 <span class="arr">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

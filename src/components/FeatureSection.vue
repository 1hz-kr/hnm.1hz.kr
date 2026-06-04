<script setup lang="ts">
// 식감/운영 두 가지 핵심 기능 블록. 두 번째 블록은 .rev로 좌우 반전.
</script>

<template>
  <section class="section" id="feature" style="padding-top:0;">
    <div class="wrap">

      <div class="feat">
        <div class="ftext" v-reveal>
          <span class="eyebrow">기능 01 — 식감</span>
          <h3 class="h3" v-reveal data-reveal-d="1">갓 뽑은 생면의
쫄깃함, 그대로</h3>
          <p class="lead pretty">반죽을 그 자리에서 면으로. 시간이 지날수록 떨어지는 식감 없이, 손님 앞에 나가는 모든 그릇이 막 뽑은 생면입니다.</p>
          <div class="specs">
            <div class="s"><div class="sk">제면 방식</div><div class="sv">즉석 반죽·제면</div></div>
            <div class="s"><div class="sk">제면 단위</div><div class="sv">1인분 정량</div></div>
          </div>
        </div>
        <div class="media" v-reveal data-reveal-d="1">
          <img src="/images/ramen-dark.png" alt="갓 뽑은 생면 한 그릇" loading="lazy" />
          <span class="cap">FRESH · 생면</span>
        </div>
      </div>

      <div class="feat rev">
        <div class="ftext" v-reveal>
          <span class="eyebrow">기능 02 — 운영</span>
          <h3 class="h3" v-reveal data-reveal-d="1">면 삶을 일손,
한 명을 줄입니다</h3>
          <p class="lead pretty">반죽 치고 면 뽑던 시간이 사라집니다. 피크타임에도 버튼 하나면 끝 — 사람은 손님 응대와 맛에 집중하세요.</p>
          <div class="specs">
            <div class="s"><div class="sk">필요 인력</div><div class="sv">1명 운영</div></div>
            <div class="s"><div class="sk">필요 경력</div><div class="sv">0년 · 전자동</div></div>
          </div>
        </div>
        <div class="media" v-reveal data-reveal-d="1">
          <img src="/images/HNM-2000-studio.png" alt="HNM-2000 전자동 즉석 제면기" loading="lazy" style="object-position:50% 35%;" />
          <span class="cap">HNM-2000 · 전자동 제면</span>
        </div>
      </div>

    </div>
  </section>
</template>

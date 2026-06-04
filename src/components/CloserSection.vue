<script setup lang="ts">
// 도입 상담 유도(클로저) 섹션.
</script>

<template>
  <section class="section" id="closer" style="padding-top:0;">
    <div class="wrap">
      <div class="closer">
        <div class="glow"></div>
        <span class="eyebrow center plain" v-reveal style="color:var(--amber);">우리 매장에 맞을까요?</span>
        <h2 class="h2" v-reveal data-reveal-d="1">새로 여는 매장이든,
운영 중인 매장이든.</h2>
        <p v-reveal data-reveal-d="2">매장 규모와 메뉴에 맞는 모델을 1:1로 추천드립니다. 도입 비용과 절감 효과까지 숫자로 짚어드려요.</p>
        <div class="cta" v-reveal data-reveal-d="3">
          <a class="btn btn-amber btn-lg" href="#">무료 도입·창업 상담</a>
          <a class="btn btn-line btn-lg" href="#">바로 구매 <span class="arr">→</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 제품 사양 시트. 좌측 사진, 우측 사양 행 목록.
// 속도 행은 강조(em)가 필요해 html 필드로 분기한다.
interface SpecRow {
  k: string // 항목명
  v?: string // 일반 텍스트 값
  html?: string // 강조 등 마크업이 필요한 값
}
const rows: SpecRow[] = [
  { k: '모델명', v: 'HNM-2000' },
  { k: '제면 속도', html: '<em>5초</em> / 1인분' },
  { k: '제면 단위', v: '1인분 즉석' },
  { k: '제면 방식', v: '즉석 반죽 + 제면 (전자동)' },
  { k: '분말 공급', v: '분말통 일체형 대용량' },
  { k: '제어', v: '컬러 터치 패널' },
  { k: '대응 면요리', v: '칼국수·우동·막국수·도삭면·중식면·파스타 등 모든 면요리' },
  { k: '면판', v: '20종 호환 (교체식) · 별도 주문 제작 가능' },
  { k: '본체 재질', v: '스테인리스' },
  { k: '제조', v: '(주)한사랑' },
  { k: '원산지', v: '대한민국' },
]
</script>

<template>
  <section class="section" id="spec" style="padding-top:0;">
    <div class="wrap">
      <div class="menu-head" style="max-width:920px;">
        <span class="eyebrow" v-reveal>제품 사양 · HNM-2000</span>
        <h2 class="h2" v-reveal data-reveal-d="1" style="margin-top:14px;">정밀하게, 단순하게, 빠르게</h2>
      </div>
      <div class="spec" v-reveal>
        <div class="spec-top">
          <div class="photo">
            <img src="/images/HNM-2000-studio.png" alt="한사랑 즉석 자동제면기 HNM-2000" loading="lazy" style="object-position:50% 35%;" />
            <span class="badge">즉석 자동제면기 · HNM-2000</span>
          </div>
          <div class="spec-rows">
            <div class="srow" v-for="row in rows" :key="row.k">
              <span class="sk">{{ row.k }}</span>
              <span class="sv" v-if="row.html" v-html="row.html"></span>
              <span class="sv" v-else>{{ row.v }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

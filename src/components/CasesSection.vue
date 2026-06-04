<script setup lang="ts">
// 매장 사례 카드 데이터.
// type: 업종 / region: 지역 / quote: 후기 / img: 사진 경로(비어 있으면 빈 사진 영역)
interface StoreCase {
  type: string // 업종
  region: string // 지역
  quote: string // 후기
  img: string // 사진 경로(비어 있으면 빈 영역)
}
const cases: StoreCase[] = [
  { type: '분식·김밥집', region: '지역', quote: '매장 후기가 들어갈 자리입니다. 실제 사장님 한마디를 넣어 주세요.', img: '' },
  { type: '칼국수 전문점', region: '지역', quote: '매장 후기가 들어갈 자리입니다. 실제 사장님 한마디를 넣어 주세요.', img: '' },
  { type: '배달 전문 매장', region: '지역', quote: '매장 후기가 들어갈 자리입니다. 실제 사장님 한마디를 넣어 주세요.', img: '' },
]
</script>

<template>
  <section class="section" id="cases" style="padding-top:0;">
    <div class="wrap">
      <div class="menu-head" style="max-width:920px;">
        <span class="eyebrow" v-reveal>매장 사례</span>
        <h2 class="h2" v-reveal data-reveal-d="1" style="margin-top:14px;">현장에서 증명된
한 그릇</h2>
        <p class="lead pretty" v-reveal data-reveal-d="2" style="margin-top:14px;">버튼 하나로 갓 뽑은 생면을 내는 매장이 늘고 있습니다. 좁은 주방에서도, 바쁜 피크타임에도 — HNM-2000을 들인 사장님들의 이야기입니다.</p>
      </div>
      <div class="cases">
        <div
          class="case"
          v-for="(c, i) in cases"
          :key="c.type"
          v-reveal
          :data-reveal-d="i || undefined"
        >
          <div class="case-photo">
            <img v-if="c.img" :src="c.img" :alt="c.type" loading="lazy" />
          </div>
          <div class="cbody">
            <div class="ctype">{{ c.type }}</div>
            <h4>매장명을 입력하세요</h4>
            <div class="cloc">{{ c.region }}</div>
            <p class="cquote">{{ c.quote }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

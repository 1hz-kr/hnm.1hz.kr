<script setup lang="ts">
// 성능 지표 카운트업 밴드. 각 셀은 v-count 디렉티브로 숫자를 채운다.
</script>

<template>
  <section class="section-sm" id="numbers">
    <div class="wrap">
      <div class="statband">
        <div class="statcell" v-reveal>
          <div class="num tnum"><span v-count="5">0</span><span class="u">초</span></div>
          <div class="lab">즉석 제면 · HNM-2000</div>
          <div class="desc">HNM-2000은 1인분 5초. 버튼을 누르면 갓 뽑은 면이 그릇에 담깁니다.</div>
        </div>
        <div class="statcell" v-reveal data-reveal-d="1">
          <div class="num tnum"><span v-count="0">0</span><span class="u">년</span></div>
          <div class="lab">필요 면 경력</div>
          <div class="desc">반죽·뽑기·정량까지 전자동. 기술이 없어도 되고, 30년 손맛 장인도 함께 선택합니다.</div>
        </div>
        <div class="statcell" v-reveal data-reveal-d="2">
          <div class="num tnum"><span v-count="1">0</span><span class="u">명</span></div>
          <div class="lab">운영 가능 인력</div>
          <div class="desc">면 뽑는 일손 하나를 줄입니다. 피크타임에도 버튼 하나.</div>
        </div>
      </div>
    </div>
  </section>
</template>

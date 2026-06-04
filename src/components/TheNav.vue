<script setup lang="ts">
// 상단 고정 네비게이션. scrolled prop으로 스크롤 시 배경/블러를 토글한다.
withDefaults(defineProps<{ scrolled?: boolean }>(), {
  scrolled: false,
})
</script>

<template>
  <nav class="nav" :class="{ scrolled }" id="nav">
    <div class="wrap nav-in">
      <a class="brand" href="#top"><span class="seal">한</span>한사랑<small>JEMYEON</small></a>
      <div class="nav-links">
        <a href="#numbers">성능</a>
        <a href="#process">작동</a>
        <a href="#menu">면 종류</a>
        <a href="#spec">사양</a>
        <a href="#lineup">모델</a>
        <a href="#cases">매장 사례</a>
      </div>
      <div class="nav-right">
        <span class="model">HNM-2000</span>
        <a class="btn btn-amber" href="#closer">도입·창업 상담</a>
      </div>
    </div>
  </nav>
</template>

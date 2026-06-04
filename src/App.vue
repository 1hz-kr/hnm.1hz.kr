<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import StatBand from './components/StatBand.vue'
import ProcessSection from './components/ProcessSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import MenuSection from './components/MenuSection.vue'
import SpecSection from './components/SpecSection.vue'
import LineupSection from './components/LineupSection.vue'
import CloserSection from './components/CloserSection.vue'
import CasesSection from './components/CasesSection.vue'
import TheFooter from './components/TheFooter.vue'

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const progress = ref(0) // 스크롤 진행도(%)
const scrolled = ref(false) // 네비 배경 토글 여부

let maxScroll = 0 // 최대 스크롤 가능 높이(캐싱) — 스크롤 중 reflow 방지
let ticking = false // rAF 스로틀 플래그

// 문서/뷰포트 높이는 스크롤이 아니라 리사이즈·로드 시에만 측정한다.
function measure() {
  maxScroll = document.documentElement.scrollHeight - window.innerHeight
}

// 실제 갱신은 rAF 안에서 1프레임당 한 번만 수행한다.
function update() {
  ticking = false
  const y = window.scrollY || window.pageYOffset
  scrolled.value = y > 24
  progress.value = maxScroll > 0 ? (y / maxScroll) * 100 : 0
}

// 스크롤 이벤트는 rAF로 코얼레싱해 레이아웃 스래싱을 막는다.
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

// 해시 앵커 클릭 시 네비 높이만큼 보정한 부드러운 스크롤을 수행한다.
function onAnchorClick(ev: MouseEvent) {
  const a = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
  if (!a) return
  const id = a.getAttribute('href')
  if (!id || id === '#' || id.length < 2) return
  const t = document.querySelector(id)
  if (!t) return
  ev.preventDefault()
  const top = t.getBoundingClientRect().top + window.scrollY - 56
  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
}

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure)
  // 이미지 등 늦게 로드되는 콘텐츠로 문서 높이가 바뀌면 다시 측정
  window.addEventListener('load', measure)
  document.addEventListener('click', onAnchorClick)
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measure)
  window.removeEventListener('load', measure)
  document.removeEventListener('click', onAnchorClick)
})
</script>

<template>
  <div class="progress" :style="{ width: progress + '%' }"></div>

  <TheNav :scrolled="scrolled" />

  <HeroSection />
  <StatBand />
  <ProcessSection />
  <FeatureSection />
  <MenuSection />
  <SpecSection />
  <LineupSection />
  <CloserSection />
  <CasesSection />
  <TheFooter />
</template>

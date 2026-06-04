import type { Directive } from 'vue'

// v-count: 요소가 뷰포트에 들어오면 0부터 목표값까지 숫자를 카운트업한다.
// 사용법: <span v-count="5">0</span>  (목표값을 디렉티브 값으로 전달)
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ease-out-cubic: 감속 곡선
function ease(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

// 단일 요소에 대한 카운트업 실행
function countUp(el: HTMLElement, target: number): void {
  if (reduce || target === 0) {
    el.textContent = String(target)
    return
  }
  const dur = 1300
  let start: number | null = null
  function frame(ts: number): void {
    if (start === null) start = ts
    const p = Math.min((ts - start) / dur, 1)
    el.textContent = String(Math.round(ease(p) * target))
    if (p < 1) requestAnimationFrame(frame)
    else el.textContent = String(target)
  }
  requestAnimationFrame(frame)
}

const count: Directive<HTMLElement, number | string> = {
  // 마운트 시 60% 가시성에서 카운트업을 1회 실행
  mounted(el, binding) {
    const target = parseFloat(String(binding.value))
    if (!('IntersectionObserver' in window)) {
      countUp(el, target)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target as HTMLElement, target)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.6 }
    )
    io.observe(el)
  },
}

export default count

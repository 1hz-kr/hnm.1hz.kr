import type { Directive } from 'vue'

// v-reveal: 요소가 뷰포트에 들어오면 'in' 클래스를 부여해 등장 애니메이션을 실행한다.
// 원본 app.js의 IntersectionObserver 기반 reveal 로직을 Vue 디렉티브로 이식.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 관찰자를 단일 인스턴스로 공유해 성능을 확보한다.
let observer: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, () => void>()

// 공유 IntersectionObserver를 지연 생성한다.
function getObserver(): IntersectionObserver {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const cb = callbacks.get(e.target)
          if (cb) cb()
          observer!.unobserve(e.target)
        }
      })
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  )
  return observer
}

const reveal: Directive<HTMLElement> = {
  // 디렉티브가 DOM에 마운트되면 관찰 시작
  mounted(el) {
    el.setAttribute('data-reveal', '')
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    callbacks.set(el, () => el.classList.add('in'))
    getObserver().observe(el)
  },
  // 언마운트 시 관찰 해제로 메모리 누수 방지
  unmounted(el) {
    if (observer) observer.unobserve(el)
    callbacks.delete(el)
  },
}

export default reveal

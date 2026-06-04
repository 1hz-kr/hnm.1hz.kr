<script setup lang="ts">
// 작동 원리 3단계 섹션. 각 단계는 스크롤 진입 시 등장한다.
interface Step {
  sn: string // 단계 번호 라벨
  title: string // 단계 제목
  desc: string // 단계 설명
}
const steps: Step[] = [
  { sn: 'STEP 01', title: '밀가루를 붓고', desc: '가루와 물만 넣으면 계량·반죽까지 자동.' },
  { sn: 'STEP 02', title: '인분을 정하고', desc: '1인분부터 필요한 만큼. 다이얼로 수량을 맞춥니다.' },
  { sn: 'STEP 03', title: '버튼을 누르면 끝', desc: '5초에 1인분씩 갓 뽑은 생면이 그릇으로.' },
]
</script>

<template>
  <section class="section" id="process">
    <div class="wrap">
      <div class="menu-head" style="max-width:920px;">
        <span class="eyebrow" v-reveal>밀가루가 면이 되기까지</span>
        <h2 class="h2" v-reveal data-reveal-d="1" style="margin-top:14px;">밀가루부터 한 그릇까지,
세 동작</h2>
      </div>
      <div class="proc">
        <div
          class="step"
          v-for="(s, i) in steps"
          :key="s.sn"
          v-reveal
          :data-reveal-d="i || undefined"
        >
          <div class="sn">{{ s.sn }}</div>
          <div>
            <h4>{{ s.title }}</h4>
            <p>{{ s.desc }}</p>
          </div>
          <div class="barwrap"><div class="bar"></div></div>
        </div>
      </div>
    </div>
  </section>
</template>

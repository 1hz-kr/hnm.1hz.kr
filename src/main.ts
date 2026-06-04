import { createApp } from 'vue'
import App from './App.vue'
import reveal from './directives/reveal'
import count from './directives/count'
import './assets/styles.css'

// 앱 생성 및 전역 디렉티브 등록
const app = createApp(App)
app.directive('reveal', reveal) // 스크롤 진입 시 등장 애니메이션
app.directive('count', count)   // 숫자 카운트업 애니메이션
app.mount('#app')

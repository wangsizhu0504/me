<script setup lang="ts">
import confetti from 'canvas-confetti'

const skills = computed(() => [
  { icon: 'i-skill-icons:vuejs-light', name: 'Vue.js' },
  { icon: 'i-skill-icons:typescript', name: 'TypeScript' },
  { icon: 'i-skill-icons:html', name: 'HTML5' },
  { icon: 'i-skill-icons:windicss-light', name: 'Windi CSS' },
  { icon: 'i-skill-icons:nodejs-light', name: 'Node.js' },
  { icon: 'i-skill-icons:sass', name: 'Sass' },
  { icon: 'i-skill-icons:javascript', name: 'JavaScript' },
  { icon: 'i-skill-icons:nginx', name: 'Nginx' },
  { icon: 'i-skill-icons:vite-light', name: 'Vite' },
  { icon: 'i-logos:ant-design', name: 'Ant Design Vue' },
  { icon: 'i-skill-icons:git', name: 'Git' },
])
const apps = computed(() => [
  { icon: 'i-logos:visual-studio-code', name: 'VS Code' },
  { icon: '/icon/raycast.svg', name: 'Raycast', svgIcon: true },
  { icon: 'i-skill-icons:postman', name: 'Postman' },
])
const services = computed(() => [
  { icon: 'i-skill-icons:github-dark', name: 'Github' },
  { icon: 'i-skill-icons:vercel-light', name: 'vercel' },
])
const count = 260
const defaults = {
  zIndex: 9999,
  origin: { y: 0.5 },
}
function fire(particleRatio: number, opts: any) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    }),
  )
}

onMounted(() => {
  fire(0.45, {
    spread: 45,
    angle: 60,
    origin: { x: 0 },
    startVelocity: 55,
  })
  fire(0.4, {
    spread: 45,
    angle: 120,
    origin: { x: 1 },
    startVelocity: 55,
  })
})
</script>

<template>
  <div class="prose m-auto mb-8 ">
    <h1 class="mb-0 !lt-md:text-7 slide-up animate-delay-200">
      <span>
        <img src="/images/hand.png" alt="hello" title="hello" class="!w-35px m-0" h-35px leading-35px vertical-initial inline-block />
      </span>
      Hello,I'm Wang sizhu
    </h1>
    <h3 text="~ [#999]" pl-4 class="!lt-md:text-15px slide-up ">
      A passionate frontend developer from China
    </h3>
    <article class="slide-up-content">
      <p>
        I live and work in China, BeiJing. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks). I enjoy coding and the challenge of learning something new everyday.
      </p>
      <p>I like making interesting projects.</p>

      <p class="text-coolgray">
        TECHNOLOGIES I USE
      </p>
      <p>DEVELOPMENT</p>
      <p class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <DevTools v-for="skill in skills" v-bind="skill" :key="skill.icon" />
      </p>
      <p>APPLICATION</p>
      <p class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <DevTools v-for="app in apps" v-bind="app" :key="app.icon" />
      </p>
      <p>SERVICE</p>
      <p class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <DevTools v-for="service in services" v-bind="service" :key="service.icon" />
      </p>
      <hr />
      <p>
        Find me on
        <a href="https://github.com/wangsizhu0504" target="_blank"> <span i-simple-icons-github /> GitHub</a>.
      </p>
      <p>
        Mail me at <a href="mailto:wangsizhu0504@outlook.com" target="_blank"> <span i-simple-icons-microsoftoutlook /> wangsizhu0504@outlook.com</a><br />
      </p>
    </article>
  </div>
</template>

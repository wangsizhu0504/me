<script setup lang="ts">
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
</script>

<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0 !lt-md:text-7">
      <span>
        <img src="/images/hand.png" alt="hello" title="hello" class="!w-35px m-0" h-35px leading-35px vertical-initial inline-block />
      </span>
      Hello,I'm Wang sizhu
    </h1>
    <h3 text="~ [#999]" pl-4 class="!lt-md:text-15px">
      A passionate frontend developer from China
    </h3>
    <article>
      <p>
        I live and work in China, BeiJing. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks). I enjoy coding and the challenge of learning something new everyday.
      </p>
      <p>I like making interesting projects.</p>

      <h6>TECHNOLOGIES I USE</h6>
      <p>DEVELOPMENT</p>
      <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <DevTools v-for="skill in skills" v-bind="skill" :key="skill.icon" />
      </div>
      <p>APPLICATION</p>
      <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <DevTools v-for="app in apps" v-bind="app" :key="app.icon" />
      </div>
      <p>SERVICE</p>
      <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <DevTools v-for="service in services" v-bind="service" :key="service.icon" />
      </div>
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

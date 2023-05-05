<script setup lang="ts">

</script>

<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0">
      <span>
        <img src="/images/hand.png" alt="hello" title="hello" class="!w-35px m-0" h-35px leading-35px vertical-initial inline-block />
      </span>
      Hello,I'm Wang sizhu
    </h1>
    <h3 text="~ [#999]" pl-4>
      A passionate frontend developer from China
    </h3>
    <p>I live and work in China, BeiJing. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks). I enjoy coding and the challenge of learning something new everyday.</p>
    <p>I like making interesting projects.</p>

    <h6>TECHNOLOGIES I USE</h6>
    <p>DEVELOPMENT</p>
    <div
      class="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap pt-2"
    >
      <div
        v-for="item in ['TypeScript', 'Vue.js']" :key="item"
        class="inline-block h-7 w-7 cursor-pointer justify-center  mr-3  flex items-center space-x-2"
      >
        <IconDev :brand="item" />
      </div>
    </div>
    <p>
      Find me on
      <a href="https://github.com/wangsizhu0504" target="_blank"> <span i-simple-icons-github /> GitHub</a>.
    </p>
    <p>
      Mail me at <a href="mailto:wangsizhu0504@outlook.com" target="_blank"> <span i-simple-icons-microsoftoutlook /> wangsizhu0504@outlook.com</a><br />
    </p>
  </div>
</template>

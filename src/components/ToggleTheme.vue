<script setup lang='ts'>
import { isDark } from '~/logics'

const checked = ref(false)
const APPEARANCE_KEY = 'theme-appearance'
// @ts-expect-error  Transition API
const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const toggle = typeof localStorage !== 'undefined' ? useAppearance() : () => { }

onMounted(() => {
  checked.value = document.documentElement.classList.contains('dark')
})

function useAppearance() {
  const classList = document.documentElement.classList
  const query = window.matchMedia('(prefers-color-scheme: dark)')

  let userPreference = localStorage.getItem(APPEARANCE_KEY)
  let isDark = (userPreference == null) || ((userPreference === 'auto' || userPreference == null)
    ? query.matches
    : userPreference === 'dark')

  query.onchange = (e) => {
    if (userPreference === 'auto')
      isDark = e.matches
  }
  function toggle(event: MouseEvent) {
    if (!isAppearanceTransition) {
      setClass((isDark = !isDark))

      userPreference = isDark
        ? query.matches ? 'auto' : 'dark'
        : query.matches ? 'light' : 'auto'

      localStorage.setItem(APPEARANCE_KEY, userPreference)

      return
    }
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      setClass((isDark = !isDark))

      userPreference = isDark
        ? query.matches ? 'auto' : 'dark'
        : query.matches ? 'light' : 'auto'

      localStorage.setItem(APPEARANCE_KEY, userPreference)
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: isDark ? '::view-transition-new(root)' : '::view-transition-old(root)',
        },
      )
    })
  }

  function setClass(dark: boolean): void {
    classList[dark ? 'add' : 'remove']('dark')
    checked.value = dark
  }

  return toggle
}

watch(checked, (newIsDark) => {
  isDark.value = newIsDark
})
</script>

<template>
  <a
    class="select-none" title="Toggle Color Scheme"
    :class="{ appearanceTransition: isAppearanceTransition }"
    @click="toggle"
  >
    <ri-moon-line v-show="isDark" />
    <ri-sun-line v-show="!isDark" />
  </a>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 9999;
}
::view-transition-new(root) {
  z-index: 1;
}
.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 9999;
}
</style>

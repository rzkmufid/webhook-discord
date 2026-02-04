<script setup lang="ts">
import { ref } from 'vue'
import { container } from '../styled-system/patterns'
import { css } from '../styled-system/css'
import Slider from './components/ui/Slider.vue'
import UserPage from './pages/UserPage.vue'
import DiscordSender from './components/DiscordSender.vue'

const sliderValue = ref([40])

const containerClass = container({
  maxWidth: '4xl',
  mx: 'auto',
  px: { base: 4, md: 8 },
  py: 8,
})

const titleClass = css({
  fontWeight: 'bold',
  fontSize: '2xl',
  mb: 8,
  color: 'gray.900',
})
</script>

<template>
  <main :class="containerClass">
    <div :class="css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8' })">
      <h1 :class="titleClass">Ark UI + Panda CSS + Vue</h1>
      <DiscordSender />
      <UserPage />
      <Slider v-model="sliderValue" />
      <p :class="css({ mt: 4 })">Value: {{ sliderValue }}</p>
    </div>
  </main>
</template>

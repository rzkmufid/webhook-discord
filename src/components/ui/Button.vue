<script setup lang="ts">
import { computed } from 'vue'
import { button } from '../../../styled-system/recipes'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

const classes = computed(() => button({ variant: props.variant, size: props.size }))
</script>

<template>
  <button :type="props.type" :class="classes" :disabled="props.disabled || props.loading">
    <span v-if="props.loading" style="margin-right: 0.5rem">...</span>
    <slot />
  </button>
</template>

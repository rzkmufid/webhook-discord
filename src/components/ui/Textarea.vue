<script setup lang="ts">
import { computed } from 'vue'
import { input } from '../../../styled-system/recipes'

interface Props {
  modelValue: string
  placeholder?: string
  disabled?: boolean
  id?: string
  variant?: 'default' | 'code'
  spellcheck?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  spellcheck: true,
})

const emit = defineEmits(['update:modelValue'])

// Reuse input recipe for basic textarea styles, or create specific one if needed
const classes = computed(() => input({ variant: props.variant }))

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <textarea
    :id="id"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="[classes, { 'resize-vertical': true, 'min-h-[300px]': true }]"
    :spellcheck="spellcheck"
    @input="handleInput"
  ></textarea>
</template>

<style scoped>
.resize-vertical {
  resize: vertical;
  min-height: 100px;
}
</style>

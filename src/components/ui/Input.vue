<script setup lang="ts">
import { computed } from 'vue'
import { input } from '../../../styled-system/recipes'

interface Props {
  modelValue: string | number
  type?: string
  placeholder?: string
  disabled?: boolean
  id?: string
  variant?: 'default' | 'code'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  variant: 'default',
})

const emit = defineEmits(['update:modelValue', 'keyup.enter'])

const classes = computed(() => input({ variant: props.variant }))

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="classes"
    @input="handleInput"
    @keyup.enter="$emit('keyup.enter')"
  />
</template>

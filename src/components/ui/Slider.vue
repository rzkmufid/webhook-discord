<script setup lang="ts">
import { Slider } from '@ark-ui/vue/slider'
import { slider } from '../../../styled-system/recipes'

const props = defineProps<{
  modelValue?: number[]
}>()

const emits = defineEmits<{
  'update:modelValue': [value: number[]]
}>()

// Generate styles from the recipe
const styles = slider()
</script>

<template>
  <Slider.Root
    :default-value="props.modelValue"
    :class="styles.root"
    @value-change="(details) => emits('update:modelValue', details.value)"
  >
    <div :style="{ display: 'flex', justifyContent: 'space-between' }">
      <Slider.Label :class="styles.label">Label</Slider.Label>
      <Slider.ValueText />
    </div>
    <Slider.Control :class="styles.control">
      <Slider.Track :class="styles.track">
        <Slider.Range :class="styles.range" />
      </Slider.Track>
      <Slider.Thumb :index="0" :class="styles.thumb">
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
  </Slider.Root>
</template>

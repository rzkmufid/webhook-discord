<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { sendDiscordMessage } from '../api/discord.api'
import { discordSenderRecipe } from '../recipes/default'

// Components
import Button from './ui/Button.vue'
import Input from './ui/Input.vue'
import Textarea from './ui/Textarea.vue'

const classes = discordSenderRecipe()

const TEMPLATES = {
  rich: {
    label: 'Rich Embed',
    value: {
      content: '',
      embeds: [
        {
          title: '✨ Amazing Title',
          description: 'This is a description of your amazing embed.',
          color: 5814783,
          fields: [
            {
              name: 'Field 1',
              value: 'Value 1',
              inline: true,
            },
            {
              name: 'Field 2',
              value: 'Value 2',
              inline: true,
            },
          ],
          footer: {
            text: 'Sent from Vue App',
          },
        },
      ],
    },
  },
  success: {
    label: 'Success',
    value: {
      embeds: [
        {
          title: '✅ Operation Successful',
          description: 'The task has been completed successfully.',
          color: 3066993, // Green
        },
      ],
    },
  },
  error: {
    label: 'Error',
    value: {
      embeds: [
        {
          title: '❌ Operation Failed',
          description: 'Something went wrong. Please try again.',
          color: 15158332, // Red
        },
      ],
    },
  },
  info: {
    label: 'Info',
    value: {
      embeds: [
        {
          title: 'ℹ️ Information',
          description: 'Here is some useful information.',
          color: 3447003, // Blue
        },
      ],
    },
  },
}

const mode = ref<'simple' | 'json'>('json') // Default to JSON to show off templates
const simpleContent = ref('')
const jsonContent = ref(JSON.stringify(TEMPLATES.rich.value, null, 2))

const { isPending, isSuccess, isError, mutate, error } = useMutation({
  mutationFn: (payload: string | object) => sendDiscordMessage(payload),
})

const applyTemplate = (key: keyof typeof TEMPLATES) => {
  jsonContent.value = JSON.stringify(TEMPLATES[key].value, null, 2)
}

const isValidJson = computed(() => {
  if (mode.value === 'simple') return true
  try {
    JSON.parse(jsonContent.value)
    return true
  } catch {
    return false
  }
})

const handleSend = () => {
  if (mode.value === 'simple') {
    if (!simpleContent.value.trim()) return
    mutate(simpleContent.value)
  } else {
    try {
      const payload = JSON.parse(jsonContent.value)
      mutate(payload)
    } catch {
      console.error('Invalid JSON')
    }
  }
}
</script>

<template>
  <div :class="classes.root">
    <div :class="classes.tabContainer">
      <button
        type="button"
        @click="mode = 'simple'"
        :class="classes.tabButton"
        :data-active="mode === 'simple' ? '' : undefined"
      >
        Simple Message
      </button>
      <button
        type="button"
        @click="mode = 'json'"
        :class="classes.tabButton"
        :data-active="mode === 'json' ? '' : undefined"
      >
        Advanced JSON
      </button>
    </div>

    <!-- Simple Mode -->
    <div v-if="mode === 'simple'">
      <label :class="classes.label" for="simple-content">Message Content</label>
      <Input
        id="simple-content"
        v-model="simpleContent"
        placeholder="Type something amazing..."
        @keyup.enter="handleSend"
      />
    </div>

    <!-- JSON Mode -->
    <div v-else>
      <label :class="classes.label" for="json-content">JSON Payload</label>

      <div :class="classes.templateButtons">
        <button
          v-for="(template, key) in TEMPLATES"
          :key="key"
          @click="applyTemplate(key as keyof typeof TEMPLATES)"
          :class="classes.templateButton"
        >
          {{ template.label }}
        </button>
      </div>

      <Textarea id="json-content" v-model="jsonContent" variant="code" :spellcheck="false" />
      <p v-if="!isValidJson" style="font-size: 0.75rem; color: #ef4444; margin-top: 0.25rem">
        Invalid JSON format
      </p>
    </div>

    <Button
      @click="handleSend"
      :loading="isPending"
      :disabled="!isValidJson || (mode === 'simple' && !simpleContent)"
    >
      {{ isPending ? 'Sending...' : 'Send to Discord' }}
    </Button>

    <div v-if="isSuccess" :class="discordSenderRecipe({ status: 'success' }).status">
      Message sent successfully!
    </div>
    <div v-if="isError" :class="discordSenderRecipe({ status: 'error' }).status">
      Failed to send message: {{ error?.message }}
    </div>
  </div>
</template>

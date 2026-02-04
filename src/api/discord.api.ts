import { ofetch } from 'ofetch'

export const sendDiscordMessage = async (payload: string | object) => {
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
        console.error('Discord Webhook URL is not defined')
        return
    }

    const body = typeof payload === 'string' ? { content: payload } : payload

    await ofetch(webhookUrl, {
        method: 'POST',
        body,
    })
}

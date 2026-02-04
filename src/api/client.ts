import { ofetch } from 'ofetch'

export const api = ofetch.create({
    baseURL: import.meta.env.VITE_API_URL,

    async onRequest({ options }) {
        const token = localStorage.getItem('token')

        if (token) {
            options.headers = new Headers(options.headers)
            options.headers.set('Authorization', `Bearer ${token}`)
        }
    },
})

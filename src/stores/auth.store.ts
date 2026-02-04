import { defineStore } from 'pinia'
import type { User, AuthState } from '@/types/user'

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: null,
        token: null,
    }),

    actions: {
        setAuth(data: { user: User; token: string }) {
            this.user = data.user
            this.token = data.token
            localStorage.setItem('token', data.token)
        },

        logout() {
            this.user = null
            this.token = null
            localStorage.removeItem('token')
        },
    },
})

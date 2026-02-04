export interface User {
    id: number
    email: string
    name: string
    // Add other user properties here
}

export interface AuthState {
    user: User | null
    token: string | null
}

import { api } from './client'

export const getUsers = () =>
    api('/users')

export const createUser = (payload: any) =>
    api('/users', {
        method: 'POST',
        body: payload,
    })

import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import * as usersApi from '@/api/users.api'

export const useUsersQuery = () =>
    useQuery({
        queryKey: ['users'],
        queryFn: usersApi.getUsers,
    })

export const useCreateUserMutation = () => {
    const qc = useQueryClient()

    return useMutation({
        mutationFn: usersApi.createUser,

        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['users'] })
        },
    })
}

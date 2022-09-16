import {defineStore} from "pinia";

import {Session} from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
    let user = $ref<object | null>(null)

    const setUser = (payload: Session) => user = payload

    return $$({
        user,

        setUser,
    })
})
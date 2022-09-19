import {defineStore} from "pinia";
import {supabase} from "@/services/supabase";
import {useRouter} from "vue-router";
import type {Session} from "@supabase/supabase-js";
import {computed} from "vue";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    let user = $ref<Session | null>(null)
    const isLoggedIn = computed(() => !!user)

    const setUser = async (payload: Session) => {
        user = payload
    }

    const logoutUser = async () => {
        await supabase.auth.signOut()
        user = null;
        console.log('logout', user)
        await router.push({name: "Home"})
    };

    return $$({
        user,
        isLoggedIn,

        setUser,
        logoutUser
    })
})
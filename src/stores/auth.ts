import {defineStore} from "pinia";
import {supabase} from "@/services/supabase";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth', () => {
    let user = $ref<object | null>(null)

    // temp type
    const setUser = (payload: object) => user = payload
    const router = useRouter();

    const logoutUser = async () => {
        await supabase.auth.signOut()
        await router.push({name: "Home"})
    };

    return $$({
        user,

        setUser,
        logoutUser
    })
})
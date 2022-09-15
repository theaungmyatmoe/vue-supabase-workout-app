import {ref} from "vue";

export const useNavbarToggle = () => {

    const open = $ref(false);

    const toggle = () => open = !open;

    return $$({
        open,

        toggle
    })
}
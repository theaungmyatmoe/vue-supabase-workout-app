import {ref} from "vue";

export const useToggle = () => {

    // switch state
    const on = $ref<Boolean>(false);

    const toggle = () => on = !on;

    return $$({
        on,
        off: !on,

        toggle
    })
}
<script lang="ts" setup>

const {type, modelValue, label, placeholder, className} = defineProps<{
  type: string,
  modelValue: string,
  label?: string,
  placeholder: string,
  className?: string
}>()


const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value

</script>

<template>
  <div>
    <label class="block mb-3 text-sm font-medium text-gray-50"> {{ label }}</label>
    <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', handleInputChange($event))"

        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-3 focus:ring-indigo-400 block w-full p-2.5"
        :class="className"
        :placeholder="placeholder"
    >
  </div>
</template>


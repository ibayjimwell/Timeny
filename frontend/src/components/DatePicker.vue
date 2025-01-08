<template>
    <label htmlFor="name" class="block text-sm font-medium mb-2">Birthday</label>
    <input 
    type="date" 
    id="birthday" 
    name="birthday" 
    placeholder="Enter your birthday" 
    aria-label="Birthday" 
    class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
    :value="modelValue ? new Date(modelValue).toISOString().split('T')[0] : ''"
    @input="$emit('update:modelValue', new Date($event.target.value).getTime())"
    required
    >
</template>

<script>
    export default {
        props: {
            modelValue: Date
        }
    }
</script>
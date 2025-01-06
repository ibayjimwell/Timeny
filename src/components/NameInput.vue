<template>
    <div>
        <label htmlFor="name" class="block text-sm font-medium mb-2">Name</label>
        <input
            type="text"
            id="name"
            name="name"
            class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 "
            placeholder="Enter your name"
            aria-label="Name"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: String
        }
    }
</script>
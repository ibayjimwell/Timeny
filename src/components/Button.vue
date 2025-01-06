<template>
     <button
        type="submit"
        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Submit"
    >
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            text: String
        }
    }
</script>
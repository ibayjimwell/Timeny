<template>
    <div class="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition-shadow duration-300">
      <div class="p-4 sm:p-5 md:p-7">
        <h3 class="text-base sm:text-lg font-medium text-gray-800">
          {{ text }}
        </h3>
        <p class="mt-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-neutral-400">
          {{ label.toUpperCase() }}
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            text: String
        }
    }
</script>
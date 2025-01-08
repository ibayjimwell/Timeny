<template>
    <div class="flex flex-col bg-white border shadow-sm hover:shadow-lg rounded-xl">
      <div class="p-4 sm:p-5 md:p-7">
        <h3 class="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-800">
          {{ age }}
        </h3>
        <p class="mt-2 text-sm sm:text-base md:text-lg text-center font-bold text-gray-500 dark:text-neutral-400">
          AGE
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            age: Number
        }
    }
</script>
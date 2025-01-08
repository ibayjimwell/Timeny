<template>
    <div class="flex flex-col bg-white border shadow-sm hover:shadow-lg rounded-xl">
      <div class="p-4 sm:p-5 md:p-7">
        <div>
          <div class="mb-2 flex justify-between items-center">
            <h3 class="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
              {{ title.toUpperCase() }}
            </h3>
            <span class="text-xs sm:text-sm md:text-base text-gray-800">
              {{ `${percentage}%` }}
            </span>
          </div>
          <div 
            class="flex w-full h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden" 
            role="progressbar" 
            :aria-valuenow="percentage" 
            aria-valuemin="0" 
            aria-valuemax="100"
          >
            <div 
              class="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition-all duration-500" 
              :style="{ width: `${percentage}%` }"
            ></div>
          </div>
        </div>
      </div>
      <div class="py-2"></div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            percentage: Number
        }
    }
</script>
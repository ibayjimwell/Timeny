<template>
    <div className="flex flex-col bg-white border shadow-sm hover:shadow-lg rounded-xl">
        <div className="p-4 md:p-7">
            <div>
                <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-800">{{ title.toUpperCase() }}</h3>
                    <span className="text-sm text-gray-800 ">{{ `${percentage}%` }}</span>
                </div>
                    <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                    <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" :style="{width: `${percentage}%`}"></div>
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
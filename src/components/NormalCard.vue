<template>
    <div className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 md:p-7">
            <h3 className="text-lg font-medium text-gray-800">
                {{ text  }}
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-500 dark:text-neutral-400">
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
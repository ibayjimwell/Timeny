<template>
    <div className="flex flex-col bg-white border shadow-sm hover:shadow-lg rounded-xl">
        <div className="p-4 md:p-7">
            <h3 className="text-4xl text-center font-bold text-gray-800">
                {{ age  }}
            </h3>
            <p className="mt-2 text-center font-bold text-gray-500 dark:text-neutral-400">
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
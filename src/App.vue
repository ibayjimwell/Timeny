<template>
  <div v-if="birthday == null" class='z-20 min-h-screen flex items-center justify-center bg-gray-950 bg-opacity-50 px-4 sm:px-6 lg:px-8'>
    <div class="bg-white border border-gray-200 rounded-xl shadow-lg">
      <div class="p-6 sm:p-8">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-gray-800">Timeny</h1>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="grid gap-y-4">
              <NameInput v-model="name"></NameInput>
              <Button text="Continue"></Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import NameInput from '@/components/NameInput.vue';
  import Button from '@/components/Button.vue';

  export default {
    components: {
      NameInput,
      Button
    },
    data() {
      return {
        name: null,
        birthday: null
      }
    }
  }
</script>
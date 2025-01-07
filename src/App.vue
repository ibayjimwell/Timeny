<template>

  <!-- MAIN DASHBOARD -->
  <div v-if="loading" className="flex justify-center h-screen pt-20">
    <PulseLoader :color="'#2563eb'"></PulseLoader>
  </div>
  <div v-else>
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 lg:gap-4 p-14">
        <div>
          <AgeCard :age="data.age"></AgeCard>
        </div>
        <div class="col-span-2"></div>
        <div>
          <ProgressCard title="Remaining life" :percentage="data['Remaining Life']"></ProgressCard>
        </div>
        <div v-for="(item, index) in Object.entries(data)">
          <NormalCard :label="item[0]" :text="item[1]"></NormalCard>
        </div>
      </div>
    </section>
    <FixedButton @click="isSetup = false" text="New"></FixedButton>
  </div>
  

  <!-- MODAL -->
  <div v-if="!isSetup" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-50">
    <div class="bg-white border border-gray-200 rounded-xl shadow-lg max-w-lg mx-auto">
      <div class="p-6 sm:p-8">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-gray-800">Timeny</h1>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="grid gap-y-4">
              <NameInput v-model="name"></NameInput>
              <DatePicker v-model="birthday"></DatePicker>
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
  import DatePicker from '@/components/DatePicker.vue';
  import AgeCard from '@/components/AgeCard.vue';
  import ProgressCard from '@/components/ProgressCard.vue';
  import NormalCard from '@/components/NormalCard.vue';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
  import FixedButton from '@/components/FixedButton.vue';
  import axios from 'axios';

  export default {
    components: {
      NameInput,
      Button,
      DatePicker,
      AgeCard,
      ProgressCard,
      NormalCard,
      PulseLoader,
      FixedButton
    },
    data() {
      return {
        data: {},
        name: null,
        birthday: null,
        isSetup: false,
        loading: true
      }
    },
    methods: {
      handleSubmit() {
        this.isSetup = true;
        this.fetchData();
      },
      async fetchData() {
        try {
          const response = await axios.get(`http://localhost:3000/?name=${this.name}&birthday=${this.birthday}`);
          this.data = response.data;
        } catch (error) {
            console.error(error);
        } finally {
            this.loading = false;
        }
      }
    }
  }
</script>
<template>
  <div>
    <Header />
    <div class="calendar" v-if="!transition">
      <v-date-picker
        is-expanded
        v-model="range"
        is-range
        color="green"
        @dayclick="dayClicked"
        show-weeknumbers
        :attributes="attributes"
        :available-dates="{ start: new Date(), end: null }"
      />
      <Button :disabled="range.end === null" :click="bookButton" />
    </div>
    <div v-else class="d-flex justify-content-around bookingdiv mt-4">
      <Input :value="range.start.toLocaleDateString()" />
      <i class="fas fa-arrow-right"></i>
      <Input :value="range.end.toLocaleDateString()" />
    </div>
  </div>
</template>

<script>
const default_layout = "default";

import Button from "../components/Button.vue";
// import Calendar from "../components/Calendar.vue";
import Header from "../components/Header.vue";
import Input from "../components/Input.vue";
export default {
  components: {
    Button,
    // Calendar,
    Header,
    Input,
  },
  data: () => ({
    transition: false,
    attributes: [
      {
        key: "today",
        highlight: {
          color: "green",
          fillMode: "light",
        },
        dates: new Date(),
      },
    ],
    range: {
      start: new Date(),
      end: null,
    },
  }),
  methods: {
    bookButton() {
      this.transition = !this.transition;
    },
    dayClicked() {
      console.log(this.range.start);
      console.log(this.range.end);
    },
  },
};
</script>

<style lang="scss">
.calendar {
  margin: 0 auto;
  width: 75%;
}

.bookingdiv {
  margin: 0 auto;
  font-size: 25px;
  width: 50%;
}
</style>
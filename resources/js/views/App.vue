<template>
  <div>
    <Header />
    <div v-if="!transition" class="calendar">
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
    <form v-else>
      <DateInput
        :value="
          range.start.toLocaleDateString() +
          ' ➜ ' +
          range.end.toLocaleDateString()
        "
        :readonly="!readonly"
        :formControl="formControl"
      >
        Datum
      </DateInput>
      <DateInput>Namn</DateInput>
    </form>
  </div>
</template>

<script>
const default_layout = "default";

import Button from "../components/Button.vue";
// import Calendar from "../components/Calendar.vue";
import Header from "../components/Header.vue";
import DateInput from "../components/DateInput.vue";
export default {
  components: {
    Button,
    // Calendar,
    Header,
    DateInput,
  },
  data: () => ({
    readonly: false,
    formControl: "form-control-plaintext",
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
form {
  margin: 0 auto;
  width: 40%;
}

.datearrow {
  // margin-top: 1.5%;
}

.bookingdiv {
  // margin: 0 auto;
  // font-size: 25px;
  // width: 50%;
}
</style>
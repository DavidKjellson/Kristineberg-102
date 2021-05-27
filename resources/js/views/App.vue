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
      <Button :disabled="range.end === null" :click="bookButton">Boka</Button>
    </div>
    <div v-else>
      <form>
        <Input
          :value="bookedDates"
          :readonly="readonly"
          :formControl="plaintext"
        >
          Datum
        </Input>
        <Input>Namn</Input>
      </form>
    </div>
  </div>
</template>

<script>
const default_layout = "default";

import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
import Input from "../components/Input.vue";
export default {
  components: {
    Button,
    Header,
    Input,
  },
  data: () => ({
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
    plaintext: "form-control-plaintext",
    range: {
      start: new Date(),
      end: null,
    },
    readonly: true,
    transition: false,
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
  computed: {
    bookedDates() {
      let start = this.range.start;
      let end = this.range.end;
      return (
        start.getDate() +
        " " +
        start.toLocaleString("sv-SV", { month: "long" }) +
        " " +
        start.getFullYear() +
        " ➜ " +
        end.getDate() +
        " " +
        end.toLocaleString("sv-SV", { month: "long" }) +
        " " +
        end.getFullYear()
      );
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
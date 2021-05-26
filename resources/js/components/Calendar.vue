<template>
  <div>
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
    <!-- <div v-else class="d-flex justify-content-around bookingdiv mt-4">
      <div class="relative flex-grow">
        <input
          class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
          :value="range.start.toLocaleDateString()"
          readonly
        />
      </div>
      <i class="fas fa-arrow-right"></i>
      <div class="relative flex-grow">
        <input
          class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
          :value="range.end.toLocaleDateString()"
          readonly
        />
      </div>
    </div> -->
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import moment from "moment";
// Vue.prototype.moment = moment;
export default {
  components: {
    Button,
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
    masks: {
      input: "YYYY-MM-DD h:mm A",
    },
  }),
  methods: {
    dayClicked() {
      console.log(this.range.start);
      console.log(this.range.end);
    },
    bookButton() {
      this.transition = !this.transition;
    },
    moment() {
      return moment();
    },
  },
  // computed: {
  //   time() {
  //     moment(this.range.start).format('YYYY');
  //   },
  // },
};
</script>


<style lang="scss">
.bookingdiv {
  margin: 0 auto;
  font-size: 25px;
  width: 50%;
}
.calendar {
  margin: 0 auto;
  width: 75%;
}
input {
  text-align: center;
}
</style>
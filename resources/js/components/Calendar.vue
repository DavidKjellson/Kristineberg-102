<template>
  <div class="calendar">
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
    <Button :disabled="range.end === null" />
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
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
    range: {
      start: new Date(),
      end: null,
    },
  }),
  methods: {
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
</style>

    <!-- <Button />
import Button from "../components/Button.vue";
    // Button,
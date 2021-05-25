<template>
  <div class="calendar">
    <!-- <vue-scheduler :disable-dialog="true" @day-clicked="dayClicked" /> -->
    <!-- <v-date-picker v-model="range" is-range>
      <v-calendar is-expanded show-weeknumbers />
    </v-date-picker> -->
    <v-date-picker
      is-expanded
      v-model="range"
      is-range
      color="green"
      @dayclick="dayClicked"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    range: {
      start: new Date(),
      end: new Date(),
    },
  }),
  methods: {
    dayClicked() {
      console.log("lol");
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
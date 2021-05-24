<template>
  <div class="calendar">
    <vue-scheduler :disable-dialog="true" @day-clicked="dayClicked" />
  </div>
</template>

<script>
export default {
  methods: {
    dayClicked(date) {
      console.log("Day clicked");
      console.log(date.getDate());
    },
  },
};
</script>


<style lang="scss">
@import "resources/sass/_variables.scss";
$v-cal-body-bg: salmon;
.calendar {
  margin: 0 auto;
  width: 75%;
  background-color: $v-cal-body-bg; /* < ABSOLUTE BULL! */
}
</style>
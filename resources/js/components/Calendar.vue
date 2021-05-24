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
.calendar {
  margin: 0 auto;
  width: 75%;
}
</style>
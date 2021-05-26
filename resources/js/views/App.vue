<template>
  <div>
    <Header />
    <Calendar />
    <!-- <Button /> -->
  </div>
</template>

<script>
const default_layout = "default";

// import Button from "../components/Button.vue";
import Calendar from "../components/Calendar.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    // Button,
    Calendar,
    Header,
  },
};
</script>
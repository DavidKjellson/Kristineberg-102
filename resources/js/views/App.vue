<template>
  <div>
    <Header />
    <Calendar />
  </div>
</template>

<script>
const default_layout = "default";

import Calendar from "../components/Calendar.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Calendar,
    Header,
  },
};
</script>
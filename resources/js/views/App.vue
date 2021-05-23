<template>
  <div>
    <Header />
    <ExampleComponent />
  </div>
</template>

<script>
const default_layout = "default";

import ExampleComponent from "../components/ExampleComponent.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    ExampleComponent,
    Header,
  },
};
</script>
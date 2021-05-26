<template>
  <div class="relative flex-grow">
    <input
      class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
      :value="value"
      readonly
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style lang="sass">
input
  text-align: center
</style>
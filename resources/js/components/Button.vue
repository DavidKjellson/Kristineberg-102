<template>
  <div class="text-center mt-4 buttondiv">
    <b-button
      :disabled="disabled"
      pill
      block
      variant="primary"
      class="button"
      @click="click"
    >
      <slot
    /></b-button>
  </div>
</template>

<script>
export default {
  props: {
    click: {
      type: Function,
      default: () => {
        return false;
      },
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>


<style lang="scss">
.buttondiv {
  margin: 0 auto;
  width: 50%;
}
.button {
  font-size: 20px;
  border: none;
  background-color: rgb(56, 161, 105) !important;

  &:hover {
    background-color: rgb(47, 133, 90);
  }
  &[disabled],
  &--disable {
    color: #fff !important;
    background-color: gray !important;
    pointer-events: none;
  }
}
</style>
<template>
  <span>
    <b-button
      :disabled="disabled"
      :pill="pill"
      :block="block"
      variant="primary"
      class="button"
      :class="buttonFlex"
      @click="click"
    >
      <slot
    /></b-button>
  </span>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    buttonFlex: {
      type: String,
    },
    click: {
      type: Function,
      default: () => {
        return false;
      },
    },
    disabled: {
      type: Boolean,
    },
    pill: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss">
// .buttondiv {
//   margin: 0 auto;
//   width: 50%;
// }
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
.button-flex {
  width: 150px;
}
.go-back {
  background-color: transparent !important;
  color: black;
  border: 0.1px solid;
  &:hover {
    color: black;
  }
}
</style>
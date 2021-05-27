<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">
      <slot />
    </label>
    <div class="col-sm-10">
      <input
        type="text"
        :value="value"
        :readonly="readonly"
        :class="formControl"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    readonly: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    formControl: {
      type: String,
      default: "form-control",
    },
  },
};
</script>

<style lang="scss">
// input {
//   text-align: center;
//   // font-size: 25px;
//   // width: 50%;
// }
</style>
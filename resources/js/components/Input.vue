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
        v-on:input="$emit('input', $event.target.value)"
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
<template >
  <div>
    <b-modal id="modal-1" title="Bekräftelse" ok-only ok-variant="success">
      <Check />
      <p class="my-4"><slot /></p>
    </b-modal>
  </div>
</template>

<script>
import Check from "../components/Check.vue";
export default {
  components: {
    Check,
  },
};
</script>

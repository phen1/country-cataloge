<template>
  <q-btn
    flat
    label="Cancel"
    color="grey-7"
    class="submit-button"
    :disable="props.disable"
    @click="emit('click')"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  disable: Boolean,
});

const emit = defineEmits(["click"]);
</script>

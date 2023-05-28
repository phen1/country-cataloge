<template>
  <q-btn
    dense
    round
    unelevated
    icon="mdi-plus"
    color="accent"
    :disable="props.disable"
    @click="emit('click')"
  >
    <q-tooltip v-if="props.tooltipText">{{ props.tooltipText }}</q-tooltip>
  </q-btn>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  disable: Boolean,
  tooltipText: String,
});

const emit = defineEmits(["click"]);
</script>

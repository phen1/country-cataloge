<template>
  <q-item
    :to="to"
    clickable
    active-class="active-menu-link"
    class="q-py-none nav-item-wrapper q-mb-sm"
    exact
  >
    <q-item-section avatar>
      <q-icon :name="icon" size="xs" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "MenuItems",
  props: {
    label: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    to: {
      type: Object,
      default: () => ({ name: "home" }),
      required: true,
    },

    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

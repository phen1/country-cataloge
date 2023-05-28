<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-accent text-white">
        <q-btn
          flat
          round
          dense
          icon="mdi-menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{ $route.meta.caption ? $route.meta.caption : $route.meta.subtitle }}
        </q-toolbar-title>

        <q-btn flat round dense icon="mdi-cog" to="/settings" class="q-mr-sm">
          <q-tooltip>Profile Settings</q-tooltip>
        </q-btn>

        <!-- <q-btn flat round dense icon="mdi-account-circle" to="/profile" class="q-mr-sm">
          <q-tooltip>Profile</q-tooltip>
        </q-btn> -->

        <q-btn flat round dense icon="mdi-logout" @click="logout">
          <q-tooltip>Logout</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      show-if-above
      v-model="leftDrawerOpen"
      :class="
        $q.dark.isActive
          ? 'q-px-md q-pb-md bg-grey-10'
          : 'q-px-md q-pb-md bg-grey-1'
      "
    >
      <q-list class="row branding" @click="dashboard" style="cursor: pointer">
        <q-item class="col-12 logo-wrapper text-center">
          <q-item-section>
            <!-- <q-img
              src="~/assets/logo.png"
              :style="{ maxWidth: '100px', margin: '0 auto' }"
            /> -->
          </q-item-section>
        </q-item>

        <q-item class="col-12 q-pr-none q-pl-xs q-py-md text-center">
          <q-item-section>
            <q-item-label class="text-bold text-h5">Country Catalog</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator />

      <q-list>
        <q-item
          to="/"
          clickable
          active-class="active-menu-link"
          class="q-py-none q-mt-md q-mb-sm nav-item-wrapper"
          exact
        >
          <q-item-section avatar>
            <q-icon name="mdi-desktop-mac-dashboard" size="xs" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Country</q-item-label>
          </q-item-section>
        </q-item>

        <template v-for="(modul, key) in navItems">
          <template>
            <div :key="key">
              <q-separator />

              <q-item
                :key="key"
                header
                class="q-pa-none text-bold nav-item-wrapper"
              >
                <q-item-section>
                  <q-item-label class="text-uppercase">{{
                    modul.label
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </template>

          <template v-for="(item, i) in modul.children" :key="i">
            <!-- <menu-items
              v-if="item.permissions.some((p) => permissions.includes(p))"
              :key="key + '-' + i"
              :label="item.label"
              :icon="item.icon"
              :to="item.to"
            /> -->
          </template>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import MenuItems from "components/Menu/Items";
import navItems from "components/Menu/nav-items";

const $q = useQuasar();
const route = useRoute();
const router = useRouter();

const leftDrawerOpen = ref(false);

const logout = async () => {
  try {
    
  } catch (error) {
    console.error(error);
  }
};

const dashboard = () => {
  router.push("/");
};
</script>
<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <Sidebar />
    <v-main> </v-main>
  </v-app>
</template>

<script setup>
//
import Sidebar from "@/components/SideBare.vue";
</script>

<style>
.v-application__wrap {
  flex-direction: revert;
}
.v-application {
  flex: none;
}
</style>

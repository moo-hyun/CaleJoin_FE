<script setup>
import FriendProfile from "@/components/FriendCalendar/FriendProfile.vue";
import FriendEventCalendar from "@/components/FriendCalendar/FriendEventCalendar.vue";
const props = defineProps(['calendarId']);
const parentCalendarId = props.calendarId;
console.log("calendar---------",props.calendarId);
</script>
<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <v-main>
      <v-container class="px-15 mt-n1" fluid="" >
        <v-row justify-end>
          <v-col cols="12" md="4">
            <FriendProfile :calendarId="parentCalendarId"/>
          </v-col>
          <v-col cols="12" md="8">
            <FriendEventCalendar :calendarId="parentCalendarId"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>

</style>

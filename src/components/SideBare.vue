<template>
  <v-navigation-drawer v-model="drawer" color="#223e6d" width="80">
    <v-list class="text-center" style="margin-top: 80px">
      <v-list-item router-link to="/" class="mb-5">
          <v-icon size="30">mdi-home</v-icon>
      </v-list-item>
        <v-list-item @click="openModal" class="mb-5">
            <svg-icon type="mdi" :path="path" width="30" height="30"></svg-icon>
        </v-list-item>

        <v-dialog v-model="isModalOpen" max-width="300">
            <v-card>
                <v-card-title>보고싶은 달력의 ID 입력</v-card-title>
                <v-text-field v-model="calendarId"
                              outlined
                              dense
                              solo-inverted
                              clearable
                              prepend-inner-icon="mdi-magnify"
                              class="custom-text-field"/>
                <v-card-actions>
                    <v-btn @click="closeModal" style="margin-left: 210px" color="black">입력</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

      <v-list-item router-link to="/dm" class="mb-5">
          <v-icon size="30">mdi-email</v-icon>
      </v-list-item>
      <v-list-item router-link to="/PlanWrite" class="mb-5">
        <svg-icon
          type="mdi"
          :path="mdiCalendarEdit"
          width="30"
          height="30"
        ></svg-icon>
      </v-list-item>
      <v-list-item router-link to="/plan" class="mb-5">
          <svg-icon
            type="mdi"
            :path="boxPath"
            width="30"
            height="30"
          ></svg-icon>
      </v-list-item>
      <v-list-item router-link to="/notice" class="mb-5" style="margin-top: 250px">
          <svg-icon
            type="mdi"
            :path="mdiLightbulbPath"
            width="30"
            height="30"
          ></svg-icon>
      </v-list-item>
      <v-list-item router-link to="/cog" class="mb-5">
          <svg-icon
            type="mdi"
            :path="cogPath"
            width="30"
            height="30"
          ></svg-icon>
      </v-list-item>
      <v-list-item router-link to="/user" class="mb-5">
          <svg-icon
            type="mdi"
            :path="userPath"
            width="30"
            height="30"
          ></svg-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref, defineEmits } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCalendarEdit } from '@mdi/js';
import { mdiBulletinBoard } from "@mdi/js";
import { mdiTextBoxMultiple } from "@mdi/js";
import { mdiLightbulb } from '@mdi/js';
import { mdiCog } from "@mdi/js";
import { mdiAccountCircle } from "@mdi/js";
import router from "@/router";

export default {
    components: {
        SvgIcon,
    },
    setup() {
        const drawer = ref(null);
        const calendarId = ref('');
        const isModalOpen = ref(false);

        const openModal = () => {
            isModalOpen.value = true;
        };

        const closeModal = () => {
            // Emit an event to the parent component with the calendarId value
            isModalOpen.value = false;
            defineEmits('close', calendarId.value);
            console.log(calendarId.value);
            router.push({ name: 'Calendar', params: { calendarId: calendarId.value }})
        };

        return {
            path: mdiBulletinBoard,
            boxPath: mdiTextBoxMultiple,
            mdiLightbulbPath: mdiLightbulb,
            cogPath: mdiCog,
            userPath: mdiAccountCircle,
            drawer,
            calendarId,
            openModal,
            closeModal,
            isModalOpen,
          mdiCalendarEdit,

        };

    },
};


</script>
<style scoped>
.custom-text-field {
    width: 100%;
    max-width: 300px; /* Adjust the width based on your design */
    margin-bottom: 16px;
}
</style>

<script>
import Sidebar from "@/components/SideBare.vue";
import EventCalendar from "@/components/EventCalendar.vue";
import Profile from "@/components/Profile.vue";

export default {
  components: {
    Profile,
    EventCalendar,
    Sidebar,
  },
};
</script>

<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <v-main>
      <v-container class="px-15 mt-n1" fluid>
        <v-row justify-end>
          <v-col cols="12" md="12">
            <!-- title -->
            <h3 class="maintit">Show Time</h3>
            <!-- create party -->
            <v-col cols="auto">
              <v-btn id="btncreate" density="compact" icon="mdi-plus"></v-btn>
            </v-col>
            <!-- Search bar -->
            <v-autocomplete
              :items="items"
              append-inner-icon="mdi-microphone"
              auto-select-first
              class="flex-full-width"
              density="comfortable"
              item-props
              menu-icon=""
              placeholder="Search Google or type a URL"
              prepend-inner-icon="mdi-magnify"
              rounded
              style="margin-left: 34.33%;float: none; clear: both; width: 30%; margin-top:10px;"
              theme="light"
              variant="solo"
            ></v-autocomplete>

            <!-- cards -->
            <v-card class="mx-auto" max-width="344" id="memoriesCard">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                cover
              ></v-img>

              <v-card-title> 여기제목 </v-card-title>

              <v-card-subtitle> 여기내용 </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                  펼쳐봐라
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="show = !show"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.maintit {
  text-align: center;
  margin: 50px 0;
}
#btncreate {
  background: linear-gradient(#59D0FB, #3208D9);
  color: white;
  margin-left: 50%;
}
#memoriesCard {
}
</style>

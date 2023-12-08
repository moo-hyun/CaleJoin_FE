<script>
import Profile from "@/components/Profile.vue";
import EventCalendar from "@/components/EventCalendar.vue";
import Sidebar from "@/components/SideBare.vue";

export default {
  name: "scheduleStatus",
  components: {
    Profile,
    EventCalendar,
    Sidebar,
  },
};
</script>

<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <!-- header -->
    <v-main>
      <v-container class="px-15 mt-n1" fluid>
        <v-row justify-end>
          <v-col cols="12" md="12">
            <!-- title -->
            <h3 class="maintit">Show Time</h3>

            <!-- modify, delete button -->
            <div id="AllBtn">
              <v-btn class="btnmodi" variant="outlined"> 파티일정 수정하기 </v-btn>
              <v-btn class="btndele" variant="outlined"> 파티 파기하기 </v-btn>
            </div>
            <!-- miniTitle -->
            <h3 class="mintit">[일정 제목] 파티 일정 현황</h3>
            <!-- schedule List -->
            <div>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card
                  class="mx-auto"
                  max-width="800px"
                  title="11/2 18:00 - 11/2 22:00"
                  subtitle="n명의 참석자를 제외하고 가능합니다."
                  prepend-icon="mdi-account"
                  append-icon="mdi-check"
                >
                  <v-card-text>드가자 내용</v-card-text>
                  <v-btn id="confbtn" variant="outlined"> 확정하기 </v-btn>
                </v-card>
              </v-col>
            </v-row>

            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card
                  class="mx-auto"
                  max-width="800px"
                  title="10/17 18:00 - 10/17 22:00"
                  subtitle="n명의 참석자를 제외하고 가능합니다."
                  prepend-icon="mdi-account"
                  append-icon="mdi-check"
                >
                  <v-card-text>드래곤 내용</v-card-text>
                  <v-btn id="confbtn" variant="outlined"> 확정하기 </v-btn>
                </v-card>
              </v-col>
            </v-row>

            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card
                  class="mx-auto"
                  max-width="800px"
                  title="01/01 18:00 - 01/01 22:00"
                  subtitle="n명의 참석자를 제외하고 가능합니다."
                  prepend-icon="mdi-account"
                  append-icon="mdi-check"
                >
                  <v-card-text>용가리 내용</v-card-text>
                  <v-btn id="confbtn" variant="outlined"> 확정하기 </v-btn>
                </v-card>
              </v-col>
            </v-row>

            </div>
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
.mintit {
  text-align: left;
  margin-bottom: 30px;
  padding-left: 300px;
}
#AllBtn {
  float: right;
  padding-right: 300px;
  color: white;
}
#confbtn {
  float: right;
  background-color: #FE5B60;
  color: white;
}
.btnmodi {
  background-color: #2185D0;

}
.btndele {
  background-color: #DB2828;
}
</style>

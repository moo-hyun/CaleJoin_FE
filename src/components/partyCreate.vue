<script>
import Profile from "@/components/Profile.vue";
import EventCalendar from "@/components/EventCalendar.vue";
import Sidebar from "@/components/SideBare.vue";

export default {
  name: "partyCreate",
  components: {
    Sidebar,
    Profile,
    EventCalendar,
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

            <!-- miniTitle -->
            <h3 class="mintit">파티 모집하기</h3>
            <!-- party Create Form -->
            <form>
              <h4>일정제목</h4>
              <v-col cols="6">
                <v-autocomplete
                  v-model="values"
                  :items="items"
                  label="일정 제목"
                  class="partyTit"
                ></v-autocomplete>
              </v-col>
              <h4>참석자</h4>
              <v-col cols="6"
              style="display: inline-flex;">
                <v-autocomplete
                  v-model="values"
                  :items="items"
                  density="comfortable"
                  label="친구 List"
                  class="joinFri"
                ></v-autocomplete>
                <v-col cols="auto">
                  <v-btn class="plusFri" density="compact" icon="mdi-plus"></v-btn>
                </v-col>
              </v-col>
              <div class="friChip">
              <v-chip
                class="ma-2"
                closable
                color="blue"
                text-color="white"
                prepend-icon="mdi-account-circle"
                :model-value="true"
              >드래곤
              </v-chip>
              <v-chip
                class="ma-2"
                closable
                color="blue"
                text-color="white"
                prepend-icon="mdi-account-circle"
                :model-value="true"
              >용가리
              </v-chip>
              <v-chip
                class="ma-2"
                closable
                color="blue"
                text-color="white"
                prepend-icon="mdi-account-circle"
                :model-value="true"
              >드가자
              </v-chip>
              </div>
              <h4>일수</h4>
              <v-col cols="3">
                <v-autocomplete
                  v-model="values"
                  :items="items"
                  density="compact"
                  label="당일치기"
                  class="partyDay"
                ></v-autocomplete>
              </v-col>
              <h4>일시</h4>
              <div class="set-date">
                <span id="startSpan">시작일<input type="date" name="start"/></span>
                ~
                <span id="endSpan">종료일<input type="date" name="end"/></span>
              </div>
              <br/>
              <h4>시간대</h4>
              <div class="set-time">
                <span id="startSpan"><input type="time" name="start"/></span>
                ~
                <span id="endSpan"><input type="time" name="end"/></span>
              </div>
              <br/>
              <h4>메모</h4>
              <v-textarea clearable label="Label" variant="outlined"></v-textarea>
              <div id="AllBtn">
                <v-btn class="btnCreate" variant="outlined"> 파티등록 </v-btn>
                <v-btn class="btnCancel" variant="outlined"> 돌아가기 </v-btn>
              </div>

            </form>

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

form {
  padding-left: 300px;
}

#AllBtn {
  float: right;
}

.btnCreate {
  background-color: #2185D0;
  color: white;
}

.btnCancel {
  background-color: #DB2828;
  color: white;
}

#startSpan {
  margin-right: 15px;
}

#endSpan {
  margin-left: 15px;
}

.friChip {
  margin-top: -25px;
  margin-bottom: 10px;
}

</style>

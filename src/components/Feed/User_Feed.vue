<template>
  <div class="profile">
    <div cols="6" md="6">
      <v-container>
        <v-card
          class="proCard"
          style="
            display: grid;
            margin-left: 27%;
            max-height: 480px;
            max-width: 1200px;
            width: auto;
            height: auto;
            margin-bottom: 5%;
          "
        >
          <div>
            <v-img
              width="100%"
              height="100%"
              src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
              cover
              class="text-white"
            >
              <!--            style="display: grid"
          grid-template-columns="100px 100px"
          justify-conten="start"-->
            </v-img>
          </div>

          <div>
            <v-card-text>
              <v-toolbar color="rgba(0, 0, 0, 0)" theme="white">
                <v-toolbar-title class="text-h6"> @User_Name </v-toolbar-title>

                <template v-slot:append>
                  <v-btn icon="mdi-dots-vertical"></v-btn>
                </template>
              </v-toolbar>
              <div class="d-flex justify-space-around">
                <v-icon
                  md="2"
                  class="mdi mdi-account"
                  fontSize="large"
                ></v-icon>
                Following 100명
              </div>
              <div class="d-flex justify-space-around">
                <v-icon md="2" class="mdi mdi-account"> </v-icon>Followers 100명
              </div>
              <div class="font-weight-bold ms-1 mb-2">Today</div>
              <div class="d-flex justify-space-around">
                <v-icon :icon="`mdiSvg:${mdiAccount}`"></v-icon>
                <v-icon :icon="`mdiSvg:${mdiPencil()}`"></v-icon>
                <v-icon :icon="`mdiSvg:${mdiShareVariant()}`"></v-icon>
                <v-icon :icon="`mdiSvg:${mdiDelete()}`"></v-icon>
              </div>
              <div
                class="font-weight-bold ms-1 mb-2"
                style="border-top: darkgray 1px solid"
              >
                유저에 관한 코멘트
              </div>
              <div
                class="font-weight-bold ms-1 mb-2"
                style="border-top: darkgray 1px solid"
              >
                가입일
              </div>

              <v-btn
                block
                class="text-none"
                color="grey-lighten-3"
                size="x-large"
                variant="flat"
              >
                Cancel
              </v-btn>

              <v-timeline density="compact" align="start">
                <v-timeline-item
                  v-for="message in messages"
                  :key="message.time"
                  :dot-color="message.color"
                  size="x-small"
                >
                  <div class="mb-4">
                    <div class="font-weight-normal">
                      <strong>{{ message.from }}</strong> @{{ message.time }}
                    </div>
                    <div>{{ message.message }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </div>
        </v-card>

        <!-- Content start -->
        <div>
          <v-card
            :loading="loading"
            class="my-12 mainFeed"
            max-width="700"
            style="
              display: inline-block;
              margin-left: 40%;
              width: 100%;
              margin-top: 30%;
            "
          >
            <!--    <v-card-text class="text-h5 py-2">
            "Turns out semicolon-less style is easier and safer in TS because most
            gotcha edge cases are type invalid as well."
          </v-card-text>-->
            <v-card-actions>
              <v-list-item class="w-100">
                <template v-slot:prepend>
                  <v-avatar
                    color="grey-darken-3"
                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-avatar>
                </template>
                <v-list-item-title>Evan You</v-list-item-title>
                <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>
                <template v-slot:append>
                  <div class="justify-self-end">
                    <v-icon class="me-1" icon="mdi-heart"></v-icon>
                    <span class="subheading me-2">256</span>
                    <span class="me-1">·</span>
                    <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                    <span class="subheading">45</span>
                  </div>
                </template>
              </v-list-item>
            </v-card-actions>
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              cover
              height="500"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-item>
              <v-card-title>일정 제목</v-card-title>
              <!--      <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>-->
            </v-card-item>
            <!-- 태그 목록 -->
            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
            </v-card-text>
            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-title>태그 목록</v-card-title>
            <div class="px-4">
              <v-chip-group v-model="selection">
                <v-chip># 초콜릿</v-chip>
                <v-chip># 제과제빵</v-chip>
                <v-chip># 달다달아</v-chip>
                <v-chip># 숩다 수워</v-chip>
              </v-chip-group>
            </div>
            <v-card-actions>
              <v-btn
                color="deep-purple-lighten-2"
                variant="text"
                @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <!-- Content end -->
      </v-container>
    </div>
    <!-- end -->

    <div>
      <!-- 우측 사이드 검색/친구or랜덤추천 -->
      <v-card
        class="right_SideBar"
        max-width="500"
        style="margin-right: 20%; width: auto; height: auto; margin-left: 10%"
      >
        <v-layout>
          <v-list nav>
            <v-list-item>
              <v-text-field
                v-model="search"
                outlined
                clearable
                rounded
                variant="solo"
                theme="light"
                prepend-inner-icon="mdi-magnify"
                placeholder="Search...."
                class="no-padding"
                style="float: left; clear: both; width: 30%; margin-top: 5%"
                @input="searchItem"
              ></v-text-field>
            </v-list-item>
            <v-list-item
              prepend-avatar="../"
              title="추천 1"
              value="inbox"
            ></v-list-item>

            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              title="추천 2"
              value="supervisors"
            ></v-list-item>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              title="추천 3"
              value="clockin"
            ></v-list-item>
          </v-list>
          <!--      <v-main style="height: 500px"></v-main>-->
        </v-layout>
      </v-card>
    </div>
    <!-- 우측 사이드 end -->
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mdiAccount, mdiDelete, mdiPencil, mdiShareVariant } from "@mdi/js";
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    mdiDelete() {
      return mdiDelete;
    },
    mdiPencil() {
      return mdiPencil;
    },
    mdiShareVariant() {
      return mdiShareVariant;
    },
    mdiAccount() {
      return mdiAccount;
    },

    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style>
.proCard {
  width: 80%;
  grid-template-columns: 50% 50%;
}
.profile {
  width: 100%;
  height: 42%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100% 0;
}
/*. {
  display: grid;
  grid-template-columns: 40% 70%;
  grid-template-rows: 70% 30%;
}*/
/*.profile {
  display: grid;
  grid-template-columns: 500px 400px;
  grid-template-rows: 500px 400px;
  grid-column: 2/4;
  grid-row: 1/3;
  margin-bottom: 50px;
}*/
.right_SideBar {
  float: right;
  margin: 100px 0;
  width: 300px;
  height: 400px;
  align-self: center;
}
.mainFeed {
  margin: 10% 15%;
}
.v-input__control {
  width: 200px;
  float: left;
}
.v-input__control {
  width: 250px;
}
.element {
  justify-content: space-between;
}
</style>

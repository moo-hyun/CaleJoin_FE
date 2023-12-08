<template>
  <v-card
    :loading="loading"
    class="my-12 mainFeed"
    max-width="500"
    style="display: inline-block"
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
      <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  <!---->
  <!-- 우측 사이드 검색/친구or랜덤추천 -->
  <v-card class="right_SideBar" max-width="500">
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
            style="float: left; clear: both; width: 30%; margin-top: 10px"
            @input="searchItem"
          ></v-text-field>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-email"
          title="Inbox"
          value="inbox"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-supervisor-circle"
          title="Supervisors"
          value="supervisors"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-clock-start"
          title="Clock-in"
          value="clockin"
        ></v-list-item>
      </v-list>
      <!--      <v-main style="height: 500px"></v-main>-->
    </v-layout>
  </v-card>

  <!-- 우측 사이드 end -->




  <v-card
    :loading="loading"
    class="my-12 mainFeed"
    max-width="500"
    style="display: inline-block"
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
      <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  <!---->
  <v-card
    :loading="loading"
    class="my-12 mainFeed"
    max-width="500"
    style="display: inline-block"
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
      <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  <!---->


</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style>
.right_SideBar {
  float: right;
  margin: 100px 0;
  width: 300px;
  height: 400px;
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
</style>

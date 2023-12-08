<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <div style="font-size: 2.875rem; text-align: center" >MySetting</div>
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
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item style="padding: 5px 5px">
      <v-card-title>Yun</v-card-title>
      <v-card-subtitle>
        <span class="me-1">Yun@google.com</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="my-1 text-subtitle-1">My Music</div>
      <v-text-field label="input link"></v-text-field>
      <v-bottom-sheet inset>
        <template v-slot:activator="{ props }">
          <div class="text-center">
            <v-btn
              v-bind="props"
              color="red"
              size="x-large"
              text="Click Me"
            ></v-btn>
          </div>
        </template>

        <v-sheet>
          <v-progress-linear model-value="50"></v-progress-linear>

          <v-list>
            <v-list-item>
              <v-list-item-title>The Walker</v-list-item-title>

              <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>

              <template v-slot:append>
                <v-btn
                  icon="mdi-rewind"
                  variant="text"
                ></v-btn>

                <v-btn
                  :class="{ 'mx-5': display.mdAndUp.value }"
                  icon="mdi-pause"
                  variant="text"
                ></v-btn>

                <v-btn
                  :class="{ 'me-3': display.mdAndUp.value }"
                  class="ms-0"
                  icon="mdi-fast-forward"
                  variant="text"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-bottom-sheet>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>My Thema</v-card-title>
    <v-radio-group>
      <v-radio label="Black" value="one"></v-radio>
      <v-radio label="White" value="two"></v-radio>
    </v-radio-group>
    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>캘린더 연동</v-card-title>
    <v-btn class="mdi mdi-google-plus" variant="tonal" style="margin-left: 4%; margin-bottom: 3%; background: #DD4B39; color: white; "
    >구글</v-btn
    >
  </v-card>
  <v-row class="d-flex justify-center">
  <v-col cols="auto">
  <v-btn variant="tonal" style="background: #2185D0; color: white; margin-right: 120px">
    회원정보 수정
  </v-btn>
  <v-btn variant="tonal" style="background: #DB2828; color: white">
    회원탈퇴
  </v-btn>
  </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },

  computed: {
    display () {
      return this.$vuetify.display
    },
  },
}
</script>

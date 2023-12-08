<template>
<!--알림DB가 필요하지 않을까요?  -->
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-toolbar>

      <v-toolbar-title >Notifications</v-toolbar-title>

      <v-spacer>
        <v-btn rounded="lg" size="x-middle"  style="float: right; margin: 30px; padding: 10px; background-color: #2185D0; color: white ">일괄 확인</v-btn>
      </v-spacer>

    </v-toolbar>

    <v-list lines="two">
      <v-list-subheader inset style="font-weight: bold">Schedule</v-list-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        :title="folder.title"
        :subtitle="folder.subtitle"
        class="list"
      >
        <template v-slot:prepend>
          <v-badge dot color="success">
            <v-avatar color="grey-lighten-1">
              <v-icon color="white">mdi-folder</v-icon>
            </v-avatar>
          </v-badge>
        </template>


      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-subheader inset style="font-weight: bold">SNS</v-list-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        :title="folder.title"
        :subtitle="folder.subtitle"
        class="list"
      >
        <template v-slot:prepend>
          <v-badge dot color="success">
            <v-avatar color="grey-lighten-1">
              <v-icon color="white">mdi-folder</v-icon>
            </v-avatar>
          </v-badge>
        </template>


      </v-list-item>
      <v-divider inset></v-divider>

      <v-list-subheader inset style="font-weight: bold">DM</v-list-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        :title="folder.title"
        :subtitle="folder.subtitle"
        class="list"
      >
        <template v-slot:prepend>
          <v-badge dot color="success">
            <v-avatar color="grey-lighten-1">
              <v-icon color="white">mdi-folder</v-icon>
            </v-avatar>
          </v-badge>
        </template>


      </v-list-item>

    </v-list>
  </v-card>
</template>
<script>

export default {
    data: () => ({
    folders: [
      {
        subtitle: 'Jan 9, 2014',
        title: 'Photos',
      },
      {
        subtitle: 'Jan 17, 2014',
        title: 'Recipes',
      },
      {
        subtitle: 'Jan 28, 2014',
        title: 'Work',
      },
    ],
  }),
}
</script>
<style>
.v-list-item-title {
  float: left;
}
.v-list-item-subtitle {
  float: right;
}

</style>

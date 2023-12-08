<template>
  <div>
    <div class="text-subtitle-2 mt-10 mb-8" style="text-align: center">Notice</div>
<!-- 검색은 필요없을 것 같아요...   -->
    <v-expansion-panels variant="popout" class="my-4">
      <v-expansion-panel-header> Item </v-expansion-panel-header>
      <v-expansion-panel
        v-for="i in 10"
        :key="i"
        title="공지사항"

        text="아직 정책이 없습니다."
      >
      </v-expansion-panel>

    </v-expansion-panels>
  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="10"
      :total-visible="10"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      page: 1,
    }
  },
}
</script>
<style>
.text-subtitle-2 {
  font-size: 2.875rem !important;}
</style>

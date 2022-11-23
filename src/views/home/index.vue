<template>
  <div class="q-pb-xs">
    <HeaderPage />
    <SubMainTop />
    <Main />
    <div class="row">
    <!-- dijadikan satu, dibagi 2 kolom -->
      <div class="col-8">
        <!-- kolom 1 -->
        <!-- <SubMainMiddle /> -->
        <!-- <LatestNews /> -->
        <!-- <MostPopular /> -->
        <!-- <Multimedia /> -->
      </div>
      <div class="col-4">
        <!-- kolom 2 -->
        <!-- <EditorChoice /> -->
        <!-- <HotTopic /> -->
        <!-- <Statistik /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'HomePage',
  components: {
    HeaderPage: defineAsyncComponent(() => import('./containter/Header')),
    SubMainTop: defineAsyncComponent(() => import('./containter/SubMainTop')),
    Main: defineAsyncComponent(() => import('./containter/Main'))
    // SubMainMiddle: defineAsyncComponent(() => import('./containter/SubMainMiddle')),
    // LatestNews: defineAsyncComponent(() => import('./containter/LatestNews')),
    // HotTopic: defineAsyncComponent(() => import('./containter/HotTopic')),
    // EditorChoice: defineAsyncComponent(() => import('./containter/EditorChoice')),
    // MostPopular: defineAsyncComponent(() => import('./containter/MostPopular')),
    // Multimedia: defineAsyncComponent(() => import('./containter/Multimedia')),
    // Statistik: defineAsyncComponent(() => import('./containter/Statistik'))
  }
}
</script>

<style>

</style>

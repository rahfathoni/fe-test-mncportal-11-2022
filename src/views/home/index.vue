<template>
  <div class="q-pb-xl">
    <HeaderPage />
    <SubMainTop />
    <Main />
    <div class="fit row wrap justify-center items-start content-start">
      <div class="col-9">
        <div class="fit row wrap justify-start items-start content-start q-pt-md">
          <div class="col-8">
            <SubMainMiddle />
            <LatestNews />
            <MostPopular />
            <!-- <Multimedia /> -->
          </div>
          <div class="col-4 q-pl-lg">
            <EditorChoice />
            <HotTopic />
            <!-- <Statistik /> -->
          </div>
        </div>
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
    Main: defineAsyncComponent(() => import('./containter/Main')),
    SubMainMiddle: defineAsyncComponent(() => import('./containter/SubMainMiddle')),
    LatestNews: defineAsyncComponent(() => import('./containter/LatestNews')),
    HotTopic: defineAsyncComponent(() => import('./containter/HotTopic')),
    EditorChoice: defineAsyncComponent(() => import('./containter/EditorChoice')),
    MostPopular: defineAsyncComponent(() => import('./containter/MostPopular'))
    // Multimedia: defineAsyncComponent(() => import('./containter/Multimedia')),
    // Statistik: defineAsyncComponent(() => import('./containter/Statistik'))
  }
}
</script>

<style>

</style>

<template>
  <div class="fit row wrap justify-start items-start content-start">
    <q-img class="q-mt-xs q-mr-sm" src="../../../assets/pic/Frame_1417.png" />
    <div class="fit row wrap justify-start items-start content-start q-pt-md">
      <div v-if="newsList && newsList.length >= 0" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs q-mr-md"
          src="../../../assets/pic/Rectangle_55.png"
        >
          <div class="absolute-bottom text-left transparent">
            <div class="row" style="font-size: 10px">
              <b>{{ newsList[0].title }}</b>
            </div>
          </div>
        </q-img>
      </div>
      <div v-if="newsList && newsList.length >= 1" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs q-mr-md"
          src="../../../assets/pic/MaskGroup.png"
        >
          <div class="absolute-bottom text-left transparent">
            <div class="row" style="font-size: 10px">
              <b>{{ newsList[1].title }}</b>
            </div>
          </div>
        </q-img>
      </div>
      <div v-if="newsList && newsList.length >= 2" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs q-mr-md"
          src="../../../assets/pic/Rectangle_286.png"
        >
          <div class="absolute-bottom text-left transparent">
            <div class="row" style="font-size: 10px">
              <b>{{ newsList[2].title }}</b>
            </div>
          </div>
        </q-img>
      </div>
      <div v-if="newsList && newsList.length >= 3" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs"
          src="../../../assets/pic/Rectangle_287.png"
        >
          <div class="absolute-bottom text-left transparent">
            <div class="row" style="font-size: 10px">
              <b>{{ newsList[3].title }}</b>
            </div>
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'SubMainMiddleHomePage',
  setup () {
    const store = useStore()

    const newsList = computed(() => store.getters.getNews)

    return {
      newsList
    }
  }
}
</script>

<style></style>

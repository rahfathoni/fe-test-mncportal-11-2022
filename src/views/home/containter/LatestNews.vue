<template>
  <div class="q-pt-lg">
    <div class="text-black text-weight-bold" style="font-size: 20px">
      LATEST NEWS
    </div>
    <q-separator class="q-mt-xs q-mb-sm" color="red" size="5px" />
    <div class="fit row wrap justify-between items-start content-start q-pt-md">
      <div class="col-4">
        <q-img
          fit="fill"
          class="q-mt-xs q-mr-none"
          src="../../../assets/pic/MaskGroup.png"
        />
      </div>
      <div class="col-8 q-pl-md">
        <div class="text-weight-bold" style="font-size: 14px; color: red">
          {{ newsList[1].category }}
        </div>
        <div class="q-pt-xs">
          <q-icon name="event_available" color="grey-6" size="sm" />
          <span class="text-grey-7 text-weight-bold" style="font-size: 11px">
            &nbsp; {{ newsList[1].date }}</span
          >
        </div>
        <div
          v-if="newsList[1].specialTag"
          class="text-weight-bold q-pb-none q-pt-xs"
          style="font-size: 14px; color: red"
        >
          {{ newsList[1].specialTag }}
        </div>
        <div
          class="text-black text-weight-bold q-pt-xs"
          style="font-size: 18px"
        >
          {{ newsList[1].title }}
        </div>
        <div class="row q-pt-sm" style="font-size: 13px">
          {{ newsList[1].desc }}
        </div>
      </div>
    </div>
    <q-separator class="q-my-lg" color="grey-3" size="2px" />
    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-12">
        <q-img fit="fill" height="auto" src="@/assets/pic/MaskGroup.png">
          <div class="absolute-bottom text-left transparent q-mx-md">
            <div class="row">
              <span class="bg-red text-white q-pa-xs" style="font-size: 15px">{{
                newsList[1].category
              }}</span>
              <span
                class="text-white q-pl-md q-pt-sm"
                style="font-size: 12px"
                >{{ newsList[1].date }}</span
              >
            </div>
            <div
              v-if="newsList[1].specialTag"
              class="row q-pt-sm"
              style="font-size: 14px; color: red"
            >
              {{ newsList[1].specialTag }}
            </div>
            <div class="row q-pt-sm" style="font-size: 22px">
              <b>{{ newsList[1].title }}</b>
            </div>
            <div class="row q-pt-sm" style="font-size: 16px">
              <b>{{ newsList[1].desc }}</b>
            </div>
          </div>
        </q-img>
      </div>
    </div>
    <q-separator class="q-my-lg" color="grey-3" size="2px" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'LatestNewsHomePage',
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

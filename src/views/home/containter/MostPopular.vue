<template>
  <div class="q-pt-xs">
    <div class="text-black text-weight-bold" style="font-size: 20px">
      MOST POPULAR
    </div>
    <q-separator class="q-mt-sm q-mb-sm" color="red" size="5px" />
    <div class="fit row wrap justify-between items-start content-start q-pt-md">
      <div v-if="newsList && newsList.length >= 0" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs q-mr-md"
          src="../../../assets/pic/Rectangle_55.png"
        />
        <div class="q-pt-sm q-pl-xs">
          <q-icon name="event_available" color="grey-6" size="xs" />
          <span class="text-grey-7 text-weight-bold" style="font-size: 11px">
            &nbsp; {{ newsList[0].shortDate }}</span
          >
        </div>
        <div class="text-black text-weight-bold q-pt-sm" style="font-size: 14px">
          {{ newsList[0].title }}
        </div>
      </div>
      <div v-if="newsList && newsList.length >= 1" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs q-mr-md"
          src="../../../assets/pic/MaskGroup.png"
        />
        <div class="q-pt-sm q-pl-xs">
          <q-icon name="event_available" color="grey-6" size="xs" />
          <span class="text-grey-7 text-weight-bold" style="font-size: 11px">
            &nbsp; {{ newsList[1].shortDate }}</span
          >
        </div>
        <div class="text-black text-weight-bold q-pt-sm" style="font-size: 14px">
          {{ newsList[1].title }}
        </div>
      </div>
      <div v-if="newsList && newsList.length >= 2" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs q-mr-md"
          src="../../../assets/pic/Rectangle_286.png"
        />
        <div class="q-pt-sm q-pl-xs">
          <q-icon name="event_available" color="grey-6" size="xs" />
          <span class="text-grey-7 text-weight-bold" style="font-size: 11px">
            &nbsp; {{ newsList[2].shortDate }}</span
          >
        </div>
        <div class="text-black text-weight-bold q-pt-sm" style="font-size: 14px">
          {{ newsList[2].title }}
        </div>
      </div>
      <div v-if="newsList && newsList.length >= 3" class="col-3">
        <q-img
          width="95%"
          class="q-mt-xs"
          src="../../../assets/pic/Rectangle_287.png"
        />
        <div class="q-pt-sm q-pl-xs">
          <q-icon name="event_available" color="grey-6" size="xs" />
          <span class="text-grey-7 text-weight-bold" style="font-size: 11px">
            &nbsp; {{ newsList[3].shortDate }}</span
          >
        </div>
        <div class="text-black text-weight-bold q-pt-sm" style="font-size: 14px">
          {{ newsList[3].title }}
        </div>
      </div>
    </div>
    <div class="fit row wrap justify-between items-start content-start q-pt-md">
      <div class="col-4">
        <q-img
          fit="fill"
          class="q-mt-xs q-mr-none"
          src="../../../assets/pic/Rectangle_289.png"
        />
      </div>
      <div class="col-8 q-pl-md">
        <div class="text-weight-bold" style="font-size: 14px; color: red">
          {{ newsList[5].category }}
        </div>
        <div class="q-pt-xs">
          <q-icon name="event_available" color="grey-6" size="xs" />
          <span class="text-grey-7 text-weight-bold" style="font-size: 11px">
            &nbsp; {{ newsList[5].shortDate }}</span
          >
        </div>
        <div
          v-if="newsList[5].specialTag"
          class="text-weight-bold q-pb-none q-pt-xs"
          style="font-size: 14px; color: red"
        >
          {{ newsList[5].specialTag }}
        </div>
        <div
          class="text-black text-weight-bold q-pt-xs"
          style="font-size: 18px"
        >
          {{ newsList[5].title }}
        </div>
        <div class="row q-pt-sm" style="font-size: 13px">
          {{ newsList[5].desc }}
        </div>
      </div>
    </div>
    <q-separator class="q-my-lg" color="grey-3" size="2px" />
    <div class="fit row wrap justify-between items-start content-start">
      <div class="col-4">
        <q-img
          fit="fill"
          class="q-mt-xs q-mr-none"
          src="../../../assets/pic/Rectangle_289.png"
        />
      </div>
      <div class="col-8 q-pl-md">
        <div class="text-weight-bold" style="font-size: 14px; color: red">
          {{ newsList[5].category }}
        </div>
        <div class="q-pt-xs">
          <q-icon name="event_available" color="grey-6" size="xs" />
          <span class="text-grey-7 text-weight-bold" style="font-size: 11px">
            &nbsp; {{ newsList[5].shortDate }}</span
          >
        </div>
        <div
          v-if="newsList[5].specialTag"
          class="text-weight-bold q-pb-none q-pt-xs"
          style="font-size: 14px; color: red"
        >
          {{ newsList[5].specialTag }}
        </div>
        <div
          class="text-black text-weight-bold q-pt-xs"
          style="font-size: 18px"
        >
          {{ newsList[5].title }}
        </div>
        <div class="row q-pt-sm" style="font-size: 13px">
          {{ newsList[5].desc }}
        </div>
      </div>
    </div>
    <q-separator class="q-my-lg" color="grey-3" size="2px" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MostPopularHomePage',
  setup () {
    const store = useStore()

    const newsList = computed(() => store.getters.getNews)

    return {
      newsList
    }
  }
}
</script>

<style>

</style>

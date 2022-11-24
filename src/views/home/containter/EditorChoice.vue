<template>
  <div class="">
    <div class="text-black text-weight-bold" style="font-size: 20px">
      EDITOR'S CHOICE
    </div>
    <q-separator class="q-mt-xs q-mb-sm" color="red" size="5px" />
    <q-img
      fit="fill"
      style="max-height: 280px"
      class="q-mt-xs q-mb-md"
      src="../../../assets/pic/Rectangle_55.png"
    >
      <div class="absolute-bottom text-left transparent q-mx-xs">
        <div class="row">
          <span class="bg-red text-white q-pa-xs" style="font-size: 14px">{{
            newsList[0].category
          }}</span>
        </div>
        <div class="row q-pt-sm" style="font-size: 16px">
          <b>{{ newsList[0].title }}</b>
        </div>
      </div>
    </q-img>
    <div>
      <q-separator class="q-mb-sm" color="grey-5" size="2px" />
      <div class="fit row wrap justify-between items-start content-start">
        <div class="col-4">
          <q-img
            fit="fill"
            width="95%"
            class="q-mt-xs q-mr-none"
            src="../../../assets/pic/MaskGroup.png"
          />
        </div>
        <div class="col-8 q-pl-md">
          <div class="text-black text-weight-bold" style="font-size: 14px">
            {{ newsList[1].title }}
          </div>
          <div class="q-pl-xs q-pt-sm">
            <q-icon name="event_available" color="grey-6" size="sm" />
            <span class="text-grey-7 text-weight-bold" style="font-size: 11px"> &nbsp; {{
              newsList[1].date
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <q-separator class="q-mt-md q-mb-sm" color="grey-5" size="2px" />
      <div class="fit row wrap justify-between items-start content-start">
        <div class="col-4">
          <q-img
            fit="fill"
            width="95%"
            class="q-mt-xs q-mr-none"
            src="../../../assets/pic/Rectangle_286.png"
          />
        </div>
        <div class="col-8 q-pl-md">
          <div class="text-black text-weight-bold" style="font-size: 14px">
            Bambang Pamungkas, Legenda Sepanjang Masa Persija
          </div>
          <div class="q-pl-xs q-pt-sm">
            <q-icon name="event_available" color="grey-6" size="sm" />
            <span class="text-grey-7 text-weight-bold" style="font-size: 11px"> &nbsp; {{
              newsList[2].date
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <q-separator class="q-mt-md q-mb-sm" color="grey-5" size="2px" />
      <div class="fit row wrap justify-between items-start content-start">
        <div class="col-4">
          <q-img
            fit="fill"
            width="95%"
            class="q-mt-xs q-mr-none"
            src="../../../assets/pic/Rectangle_288.png"
          />
        </div>
        <div class="col-8 q-pl-md">
          <div class="text-black text-weight-bold" style="font-size: 14px">
            {{ newsList[4].title }}
          </div>
          <div class="q-pl-xs q-pt-sm">
            <q-icon name="event_available" color="grey-6" size="sm" />
            <span class="text-grey-7 text-weight-bold" style="font-size: 11px"> &nbsp; {{
              newsList[4].date
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <q-separator class="q-mt-md q-mb-sm" color="grey-5" size="2px" />
      <div class="fit row wrap justify-between items-start content-start">
        <div class="col-4">
          <q-img
            fit="fill"
            width="95%"
            class="q-mt-xs q-mr-none"
            src="../../../assets/pic/Rectangle_289.png"
          />
        </div>
        <div class="col-8 q-pl-md">
          <div class="text-black text-weight-bold" style="font-size: 14px">
            {{ newsList[5].title }}
          </div>
          <div class="q-pl-xs q-pt-sm">
            <q-icon name="event_available" color="grey-6" size="sm" />
            <span class="text-grey-7 text-weight-bold" style="font-size: 11px"> &nbsp; {{
              newsList[5].date
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <q-separator class="q-mt-md q-mb-sm" color="grey-5" size="2px" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'EditorChoiceHomePage',
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

<template>
  <div>
    <div class="fit row justify-evenly items-start content-start q-py-lg">
      <div class="text-center q-pt-md">
        <q-img width="330px" src="../../../assets/pic/logo_(FC)_1.png" />
      </div>
      <div class="text-center q-mr-lg">
        <q-img width="700px" src="../../../assets/pic/image_34.png" />
      </div>
    </div>
    <div>
      <q-tabs
        v-model="tab"
        indicator-color="transparent"
        active-color="red"
        class="text-white text-weight-bold q-py-sm"
        style="background-color: #070D59;"
      >
        <q-tab v-for="tab in tabOption" :key="tab.name" v-bind="tab" />
      </q-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HeaderHomePage',
  setup () {
    return {
      tab: ref('beranda'),
      tabOption: [
        { name: 'beranda', label: 'beranda' },
        { name: 'bola', label: 'bola' },
        { name: 'balap', label: 'balap' },
        { name: 'ragam', label: 'ragam' },
        { name: 'sportaiment', label: 'sportaiment' },
        { name: 'hobi', label: 'hobi' },
        { name: 'data statistik', label: 'data statistik' },
        { name: 'multimedia', label: 'multimedia' },
        { name: 'index', label: 'index' }
      ]
    }
  }

}
</script>

<style></style>

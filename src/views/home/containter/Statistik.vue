<template>
  <div class="q-pt-lg q-mt-sm">
    <div class="fit row wrap justify-between items-start content-start">
      <div class="col text-black text-weight-bold q-pt-xs" style="font-size: 20px">
        STATISTIK
      </div>
      <div class="col text-right">
        <q-btn-dropdown outline color="black" class="q-px-sm text-weight-bold" :label="buttonValue" style="border-radius: 6px" dropdown-icon="expand_more">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick('Euro 2021')">
              <q-item-section>
                <q-item-label>EURO 2021</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick('WORLD CUP')">
              <q-item-section>
                <q-item-label>WORLD CUP</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <q-separator class="q-mt-xs q-mb-md" color="red" size="5px" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'StatistikHomePage',
  setup () {
    const buttonValue = ref('Euro 2021')

    const onItemClick = (label) => {
      buttonValue.value = label
    }

    return {
      buttonValue,
      onItemClick
    }
  }
}
</script>

<style>

</style>

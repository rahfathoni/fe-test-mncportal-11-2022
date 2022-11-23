<template>
  <div
    class="fit row justify-center items-start content-start q-py-lg q-py-md q-px-xl"
  >
    <div class="col-1">
      <div
        class="row text-weight-bold q-pb-none q-mr-md"
        style="font-size: 18px"
      >
        JADWAL
      </div>
      <div
        class="row text-weight-bold q-pt-none q-mr-md"
        style="font-size: 18px"
      >
        & HASIL
      </div>
      <div class="row q-mt-xs q-mr-md">
        <q-btn-dropdown
          flat
          size="md"
          no-caps
          color="black"
          class="q-px-none"
          label="Jadwal Terbaru"
          dropdown-icon="expand_more"
        >
          <q-list dense>
            <q-item clickable>
              <q-item-section>
                <q-item-label>World Cup</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Liga Inggris</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <!-- <div class="col-8">
      <div v-for="item in matchOption" :key="item.id">
        <div class="row" style="font-size: 12px">
          {{ item.league }}
        </div>
      </div>
      <q-tabs
          v-model="tab"
          indicator-color="transparent"
          active-color="black"
          disable
          class="text-black text-weight-bold q-py-sm q-pl-lg"
      >

        <q-tab v-for="tab in tabOption" :key="tab.name" v-bind="tab" />
      </q-tabs>
    </div> -->
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'SubMainTopHomePage',
  setup () {
    return {
      // tab: ref('mails'),
      // innerTab: ref('innerMails'),
      // splitterModel: ref(60)
      // tab: ref('beranda'),
      // tabOption: [
      //   { name: 'beranda', label: 'beranda' },
      //   { name: 'bola', label: 'bola' },
      //   { name: 'balap', label: 'balap' },
      //   { name: 'ragam', label: 'ragam' },
      //   { name: 'sportaiment', label: 'sportaiment' },
      //   { name: 'hobi', label: 'hobi' },
      //   { name: 'data statistik', label: 'data statistik' },
      //   { name: 'multimedia', label: 'multimedia' },
      //   { name: 'index', label: 'index' }
      // ]
      matchOption: [
        {
          id: 1,
          league: 'World Cup',
          date: 'Rabu, 31 November 2021',
          firstCountry: 'BEL',
          firstIcon: '../../../assets/country/belgia.png',
          firstScore: '0',
          secondCountry: 'FRA',
          secondIcon: '../../../assets/country/france.png',
          secondScore: '0'
        },
        {
          id: 2,
          league: 'World Cup',
          date: 'Rabu, 31 November 2021',
          firstCountry: 'NED',
          firstIcon: '../../../assets/country/belanda.png',
          firstScore: '0',
          secondCountry: 'ITA',
          secondIcon: '../../../assets/country/itali.png',
          secondScore: '0'
        },
        {
          id: 3,
          league: 'World Cup',
          date: 'Rabu, 31 November 2021',
          firstCountry: 'BEL',
          firstIcon: '../../../assets/country/belgia.png',
          firstScore: '0',
          secondCountry: 'FRA',
          secondIcon: '../../../assets/country/france.png',
          secondScore: '0'
        },
        {
          id: 4,
          league: 'World Cup',
          date: 'Rabu, 31 November 2021',
          firstCountry: 'BEL',
          firstIcon: '../../../assets/country/belgia.png',
          firstScore: '0',
          secondCountry: 'FRA',
          secondIcon: '../../../assets/country/france.png',
          secondScore: '0'
        },
        {
          id: 5,
          league: 'World Cup',
          date: 'Rabu, 31 November 2021',
          firstCountry: 'BEL',
          firstIcon: '../../../assets/country/belgia.png',
          firstScore: '0',
          secondCountry: 'FRA',
          secondIcon: '../../../assets/country/france.png',
          secondScore: '0'
        }
      ]
    }
  }
}
</script>

<style></style>

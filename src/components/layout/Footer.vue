<template>
  <div>
    <div
      class="fit row wrap justify-evenly items-start content-start q-pl-lg"
      style="background-color: #24326f"
    >
      <div class="col-4 q-py-xl">
        <div class="row q-pt-md">
          <div class="text-left">
            <q-img width="350px" src="../../assets/pic/logo_(BW)_2.png" />
          </div>
        </div>
        <div class="row q-pt-xl">
          <div class="text-left text-grey-5" style="font-size: 20px">
            Connect With Us:
          </div>
        </div>
        <div class="row q-pt-lg">
          <q-btn
            flat
            square
            size="md"
            class="q-pa-sm bg-white q-mr-lg"
            style="border-radius: 3px"
          >
            <q-avatar square size="28px">
              <q-img
                ratio="1"
                fit="contain"
                src="../../assets/icon/facebook.png"
              />
            </q-avatar>
          </q-btn>
          <q-btn
            flat
            square
            size="md"
            class="q-pa-sm bg-white q-mr-lg"
            style="border-radius: 3px"
          >
            <q-avatar square size="28px">
              <q-img src="../../assets/icon/twitter.png" />
            </q-avatar>
          </q-btn>
          <q-btn
            flat
            square
            size="md"
            class="q-pa-sm bg-white q-mr-lg"
            style="border-radius: 3px"
          >
            <q-avatar square size="28px">
              <q-img src="../../assets/icon/instagram_icon.png" />
            </q-avatar>
          </q-btn>
          <q-btn
            flat
            square
            size="md"
            class="q-pa-sm bg-white q-mr-lg"
            style="border-radius: 3px"
          >
            <q-avatar square size="28px">
              <q-img src="../../assets/icon/Subtract.png" />
            </q-avatar>
          </q-btn>
          <q-btn
            flat
            square
            size="md"
            class="q-pa-sm bg-white q-mr-lg"
            style="border-radius: 3px"
          >
            <q-avatar square size="28px">
              <q-img src="../../assets/icon/tiktok_fill.png" />
            </q-avatar>
          </q-btn>
        </div>
      </div>
      <div class="col-3 text-center q-py-xl q-pl-xl">
        <div class="row q-pt-lg q-pl-xl">
          <div
            class="text-white text-weight-bold q-mr-lg"
            style="font-size: 20px"
          >
            ABOUT US
          </div>
        </div>
        <div
          v-for="item in aboutUsOption"
          :key="item"
          class="row q-pt-md q-pl-xl"
        >
          <div class="text-grey-5" style="font-size: 20px">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="col-4 text-center q-py-xl q-pl-md">
        <div class="row q-pt-lg q-pl-xl">
          <div
            class="text-white text-weight-bold q-mr-lg"
            style="font-size: 20px"
          >
            KANAL UTAMA
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div
              v-for="item in kanalOption.left"
              :key="item"
              class="row q-pt-md q-pl-xl"
            >
              <div class="text-grey-5" style="font-size: 20px">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="col">
            <div
              v-for="item in kanalOption.right"
              :key="item"
              class="row q-pt-md q-pl-sm"
            >
              <div class="text-grey-5" style="font-size: 20px">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fit row wrap justify-center items-start content-start q-py-md"
      style="background-color: #070d59; border-top: 0.1px solid #3f51b5"
    >
      <div class="text-grey-5" style="font-size: 20px">
        © Copyright 2021. Sportstars.id All rights reseved
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLayout',
  setup () {
    return {
      aboutUsOption: [
        'Tentang Kami',
        'Disclaimer',
        'Kode Etik',
        'Term of Service',
        'Privacy Policy',
        'Kontak Kamu'
      ],
      kanalOption: {
        left: ['Beranda', 'Bola', 'Balap', 'Ragam', 'Sportainment', 'Hobi'],
        right: ['Data Statistik', 'Multimedia', 'Index']
      }
    }
  }
}
</script>

<style></style>

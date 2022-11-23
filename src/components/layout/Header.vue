<template>
  <q-header
    bordered
    class="bg-white q-my-none q-py-none"
    style="height: 35px; border-color: black"
  >
    <q-toolbar>
      <q-toolbar-title
        class="fit row justify-around items-start content-startt"
      >
        <div class="q-pb-md">
          <q-btn
            v-for="(item, i) in buttonLeftOption"
            :key="i"
            size="md"
            flat
            no-caps
            :label="item"
            class="text-weight-bold q-px-sm"
          />
          <q-btn
            flat
            size="sm"
            color="black"
            class="q-pl-none"
            icon="expand_more"
          />
        </div>
        <div class="text-right">
          <q-btn flat round size="sm" class="q-mr-md">
            <q-avatar square size="20px">
              <q-img
                ratio="1"
                fit="contain"
                src="../../assets/icon/facebook.png"
              />
            </q-avatar>
          </q-btn>
          <q-btn flat round size="sm" class="q-mr-md">
            <q-avatar size="20px">
              <q-img src="../../assets/icon/twitter.png" />
            </q-avatar>
          </q-btn>
          <q-btn flat round size="sm" class="q-mr-md">
            <q-avatar square size="20px">
              <q-img src="../../assets/icon/instagram_icon.png" />
            </q-avatar>
          </q-btn>
          <q-btn flat round size="sm" class="q-mr-md">
            <q-avatar square size="20px">
              <q-img src="../../assets/icon/Subtract.png" />
            </q-avatar>
          </q-btn>
          <q-btn flat round size="sm" class="q-mr-md">
            <q-avatar size="20px">
              <q-img src="../../assets/icon/tiktok_fill.png" />
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'HeaderLayout',
  setup () {
    return {
      buttonLeftOption: [
        'RCTI+',
        'Vision+',
        'Okezone.com',
        'SINDOnews.com',
        'iNews.id',
        'Buddyku'
      ]
    }
  }
}
</script>

<style></style>

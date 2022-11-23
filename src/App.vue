<template>
  <q-layout view="hHh Lpr lff">
    <HeaderLayout class="text-black"/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterLayout/>
  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'LayoutDefault',
  components: {
    HeaderLayout: defineAsyncComponent(() => import('./components/layout/Header')),
    FooterLayout: defineAsyncComponent(() =>
      import('./components/layout/Footer')
    )
  },
  setup () {
    return {}
  }
}
</script>

<template>
  <div class="q-pt-md">
    <div class="text-black text-weight-bold" style="font-size: 20px">
      HOT TOPICS
    </div>
    <q-separator class="q-mt-xs q-mb-md" color="red" size="5px" />
    <q-list bordered separator>
      <q-item
        v-for="(item, idx) in topicOptions"
        :key="idx"
        clickable
        v-ripple
        :style="`background-color: ${bgColor(idx)}`"
      >
        <q-item-section avatar>
          <q-icon color="white" name="chevron_right" />
        </q-item-section>
        <q-item-section class="text-white text-weight-bold">{{ item }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'HotTopicHomePage',
  setup () {
    const bgColor = (idx) => {
      if (parseFloat(idx) % 2 === 0) {
        return '#070D59'
      }
      return '#24326F'
    }

    return {
      topicOptions: [
        'Sepak Bola',
        'Moto GP',
        'Bola Basket',
        'Badminton',
        'Tenis',
        'Formula 1'
      ],
      bgColor
    }
  }
}
</script>

<style></style>

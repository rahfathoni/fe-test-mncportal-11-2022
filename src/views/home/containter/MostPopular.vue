<template>
  <div class="home">
    Most Popular
    <p v-for="n in 2" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
    </p>
  </div>
</template>

<script>

export default {
  name: 'MostPopularHomePage'
}
</script>

<style>

</style>

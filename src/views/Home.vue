<template>
  <div class="home">
    <NewsCarousel />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import NewsCarousel from '@/components/NewsCarousel.vue'

export default {
  name: 'home',
  components: {
    NewsCarousel
  }
}
</script>
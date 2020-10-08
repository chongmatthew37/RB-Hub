<template>
    <div class="news">
        <NewsCarousel />
        <h1>Later Gator Daily Announcements - {{ new Date() | moment("MMMM DD") }}</h1>
    </div>
</template>

<script>
import NewsCarousel from '@/components/NewsCarousel.vue'

export default {
  name: 'News',
  components: {
    NewsCarousel
  }
}
</script>
<template>
    <div class="news">
        <v-carousel>
          <v-carousel-item
            v-for="(item, index) in carousel"
            :key="index"
            :src="item.thumbnail"
            cycle=true
          >
          </v-carousel-item>
        </v-carousel>
        <v-card 
          v-for="item in news"
          :key="item.pubDate"
          class="my-5"
        >
          <v-img
            v-if="item.thumbnail"
            :src="item.thumbnail"
          ></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text v-html="item.description.replace(/<img[^>]*>/g,'')"></v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'News',
  data: () => {
    return ({
      news: [],
      carousel: []
    })
  },
  methods: {
    sortNews: async function () {
      let response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Friverbluffathletics.com%2Ffeed%2F")
      let json = await response.json()

      json.items.forEach(item => {
        if (item.description.replace(/<img[^>]*>/g,'') != "<p></p>") {
          this.news.push(item);
        } else if (item.thumbnail != "") {
          this.carousel.push(item);
        }
      });
    }
  },
  created: function () {
    this.sortNews();
  }
}
</script>

<style scoped>
img {
  max-width: 100%!important;
  height: auto!important;
}
</style>
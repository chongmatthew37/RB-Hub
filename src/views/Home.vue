<template>
  <div class="home">
      <h1 class="text-h2 mt-5 mb-10">Welcome to RB Hub!</h1>
      <v-btn 
        :color="button.color"
        height="200"
        width="200"
        class="mr-5 mb-5"
        v-for="(button, i) in buttons"
        :key="i"
        :to="button.link"
      >
        <span style="text-align: center">
          <v-icon x-large>{{ button.icon }}</v-icon>
          <br />
          {{ button.title }}
        </span>
      </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    "buttons": [
      {
        "title": "News",
        "icon": "mdi-newspaper",
        "link": "/news",
        "color": "error"
      },
      {
        "title": "Map",
        "icon": "mdi-map",
        "link": "/map",
        "color": "info"
      },
      {
        "title": "Settings",
        "icon": "mdi-cog",
        "link": "/settings",
        "color": "primary"
      },
    ],
  })
}
</script>
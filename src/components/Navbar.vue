<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
    <v-img
      alt="River Bluff Logo"
      class="shrink mr-2"
      contain
      src="http://rbhs.lexington1.net/wp-content/uploads/sites/43/2015/09/River-Bluff-Logo.jpg"
      transition="scale-transition"
      width="120"
    />

    <!-- <v-img
      alt="Vuetify Name"
      class="shrink mt-1 hidden-sm-and-down"
      contain
      min-width="100"
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
      width="100"
    /> -->
    </div>

    <v-spacer />

    <v-btn
    @click="$router.push('about')"
    text
    >
    <span class="mr-2">Latest Release</span>
    <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>
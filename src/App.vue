<template>

  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list dense>
          <v-list-item link @click="$router.push('/')">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="$router.push('/welcome')">
            <v-list-item-action>
              <v-icon>mdi-newspaper</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>News</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="$router.push('/map')">
            <v-list-item-action>
              <v-icon>mdi-map</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Map</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="$router.push('/schedule')">
            <v-list-item-action>
              <v-icon>mdi-clock-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Schedule</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="$router.push('/settings')">
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      :clipped-left=true
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <div class="d-flex align-center">
        <v-img
          alt="River Bluff Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.svg')"
          transition="scale-transition"
          width="120"
          @click="$router.push('/')"
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
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      text
      >
        <span class="mr-2">Dark Mode</span>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>

</template>

<script>
export default {
  name: 'App',

  components: {
    //
  },

  data: () => ({
    drawer: null
  }),
};

</script>

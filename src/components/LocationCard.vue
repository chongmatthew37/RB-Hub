<template>
  <v-card>
    <v-toolbar 
      dark
      prominent
      :src="location.image"
    >
      <v-toolbar-title>{{ location.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list three-line subheader>
      <v-subheader>Information</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Current Occupancy</v-list-item-title>
          <v-list-item-subtitle>{{ Math.floor(Math.random() * Math.floor(50)) }} / 50
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list three-line subheader v-if="location.links">
      <v-subheader>Links</v-subheader>
      <v-list-item v-for="(link, index) in location.links" :key="index">
        <v-list-item-content>
          <v-list-item-title><a target="_blank" :href="link.href">{{ link.title }}</a></v-list-item-title>
          <v-list-item-subtitle>{{ link.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'LocationCard',
    props: {
      location: Object,
      closeDialog: Function,
    }
  }
</script>
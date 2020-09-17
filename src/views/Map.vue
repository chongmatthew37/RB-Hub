<template>
  <div class="map">
    <HelloWorld />
    <v-btn fixed bottom right color="secondary" class="black--text"  @click="$vuetify.theme.dark = !$vuetify.theme.dark">Mappy Boi</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

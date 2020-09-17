<template>
  <div class="schedule">
    <HelloWorld />
    <v-btn fixed bottom right color="secondary" class="black--text"  @click="$vuetify.theme.dark = !$vuetify.theme.dark">Hehe</v-btn>
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

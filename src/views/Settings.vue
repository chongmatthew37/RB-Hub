<template>
  <div class="settings">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-btn fixed bottom right color="secondary" class="black--text"  @click="$vuetify.theme.dark = !$vuetify.theme.dark">Test FAB</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Settings',
  components: {
    HelloWorld
  }
}
</script>

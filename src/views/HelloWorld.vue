<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-btn fixed bottom right color="secondary" class="black--text" v-model="$vuetify.theme.dark">Test FAB</v-btn>
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

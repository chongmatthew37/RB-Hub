<template>
  <div class="settings">
    <h1 class="text-h2 mt-5 mb-10">Settings</h1>
    <v-switch v-model="$vuetify.theme.dark" label="Dark Mode"></v-switch>
    <v-btn fixed bottom right color="secondary" class="black--text" to="/login">Login stoopid</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Settings',
}
</script>
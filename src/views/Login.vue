<template>
  <div class="login">
    <h1>Opening login window in new tab</h1>
    <v-btn class="primary" @click="googleLogin">Login</v-btn>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    methods: {
      googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
          hd: "lexington1.net"
        });

        firebase.auth().signInWithPopup(provider).then((result) => {
          this.$root.user = result.user
          this.$router.replace('/')
        }).catch((err) => {
          alert("Login failed: " + err.message)
        })
      }
    }
  }
</script>
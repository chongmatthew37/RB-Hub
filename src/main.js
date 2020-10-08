import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'

import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBolpUsmq6o0f4En4k3dHcR3ExRMna2vZM",
  authDomain: "river-bluff-high-school.firebaseapp.com",
  databaseURL: "https://river-bluff-high-school.firebaseio.com",
  projectId: "river-bluff-high-school",
  storageBucket: "river-bluff-high-school.appspot.com",
  messagingSenderId: "208923448537",
  appId: "1:208923448537:web:8bbadd5e5791562dc95ac8"
}

firebase.initializeApp(firebaseConfig)

// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch("fetchUser", user)
// })

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

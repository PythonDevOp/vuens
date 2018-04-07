import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

var firebase = require("nativescript-plugin-firebase");

firebase.init({
    apiKey: "AIzaSyAQdvelL0ludo8_5qS9NKDQPxs61dz3B9Q",
    authDomain: "vuens-ab94d.firebaseapp.com"
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);s
// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();

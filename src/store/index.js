import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    counter,
    user
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
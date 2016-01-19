'use strict';

const store = global.localStorage;

export default {
  get(key){
    try {
      return JSON.parse(store.getItem(key));
    } catch (ex) {
      return null;
    }
  },

  set(key, value){
    try {
      store.setItem(key, JSON.stringify(value));
    } catch (ex){}
  },

  clear(key){
    if (key != null){
      store.setItem(key, 'null');
    }
  }
};

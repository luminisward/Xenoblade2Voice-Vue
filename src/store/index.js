import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations'
import getters from './getters'

import Charactor from '../assets/json/jsonChara.json'
import Dialogue from '../assets/json/jsonDialogue.json'

export default new Vuex.Store({
  state: {
    charactor: parseCharactor(Charactor),
    dialogue: Dialogue,
    selectedChara: [],
    selectedPattern: Object.keys(Dialogue)[2],
    selectedDialogue: null
  },
  getters,
  mutations
})

function parseCharactor(charactor) {
  for (let cid in charactor){
    charactor[cid]['cid'] = cid
    charactor[cid]['img'] = require('../assets/image/' + cid + '.png')
  }
  return charactor
}

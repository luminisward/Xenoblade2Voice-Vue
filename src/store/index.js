import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations'
import getters from './getters'

import Charactor from '../assets/json/jsonChara.json'
import Dialogue from '../assets/json/jsonDialogue.json'
import CharactorDlc from '../assets/json/jsonChara_DLC.json'
import DialogueDlc from '../assets/json/jsonDialogue_DLC.json'

export default new Vuex.Store({
  state: {
    charactor: parseCharactor(Charactor),
    charactorDlc: parseCharactor(CharactorDlc),
    dialogue: Dialogue,
    dialogueDlc: DialogueDlc,
    selectedChara: [],
    selectedPattern: Object.keys(Dialogue)[0],
    thenPlay: '',
    selectedDialogue: null,
    language: 'CN',
    game: 'main'
  },
  getters,
  mutations
})

function parseCharactor(charactor) {
  for (const cid in charactor) {
    charactor[cid]['cid'] = cid
    charactor[cid]['img'] = require('../assets/image/' + cid + '.png')
  }
  return charactor
}

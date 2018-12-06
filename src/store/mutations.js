export default {

  addChara(state, cid) {
    // 根据游戏切换角色列表
    let charactor
    switch (state.game) {
      case 'main':
      {
        charactor = state.charactor
        break
      }
      case 'torna':
      {
        charactor = state.charactorDlc
      }
    }
    if (state.selectedChara.length < 3) {
      state.selectedChara.push(charactor[cid])
    }
  },

  removeSelectedChara(state, cid) {
    const ret = []
    for (const chara of state.selectedChara) {
      if (chara.cid !== cid) {
        ret.push(chara)
      }
    }
    state.selectedChara = ret
  },

  setPattern(state, pattern) {
    state.selectedPattern = pattern
    state.thenPlay = pattern
  },

  setLanguage(state, language) {
    state.language = language
  },

  setGame(state, game) {
    switch (game) {
      case 'main':
      {
        state.selectedPattern = Object.keys(state.dialogue)[0]
        break
      }
      case 'torna':
      {
        state.selectedPattern = Object.keys(state.dialogueDlc)[0]
      }
    }
    state.game = game
    state.selectedChara = []
  }

}

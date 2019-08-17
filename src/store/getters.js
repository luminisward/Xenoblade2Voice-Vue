export default {

  availablePatterns(state) {
    return getAvailablePatterns(state)
  },

  charaList(state) {
    const availablePatterns = getAvailablePatterns(state)
    const charaList = []

    // Set去重
    let cids = new Set(
      availablePatterns.map(
        pattern => pattern.split('_')
      ).reduce(
        (x, y) => x.concat(y)
      ).map(
        cid => cid.replace(/[xyz]/g, '')
      )
    )

    // 去除已选的角色
    const selectedCid = state.selectedChara.map(x => x.cid)
    selectedCid.map(cid => cids.delete(cid))

    // 根据游戏切换角色列表
    let charactor = state.charactor
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

    // 生成charaList
    cids = Array.from(cids)
    cids.map(
      cid => {
        charaList.push({
          'cid': cid,
          'name': charactor[cid].name,
          'img': charactor[cid].img
        })
      }
    )

    // 按cid排序
    return charaList.sort((x, y) => parseInt(x.cid) - parseInt(y.cid))
  },

  charaBoxList(state) {
    const ret = []
    for (const i of state.selectedChara) {
      ret.push(i)
    }

    const dummyImg = require('../assets/image/placeholder.png')
    let i = state.selectedChara.length
    while (i < 3) {
      ret.push({
        img: dummyImg,
        name: {
          CN: '',
          JP: ''
        }
      })
      i += 1
    }
    return ret
  },

  playList(state) {
    let dialogue, charactor
    switch (state.game) {
      case 'main':
      {
        charactor = state.charactor
        dialogue = state.dialogue
        break
      }
      case 'torna':
      {
        charactor = state.charactorDlc
        dialogue = state.dialogueDlc
      }
    }
    if (state.selectedPattern) {
      const textObj = dialogue[state.selectedPattern]['text']
      const playList = []
      for (const voice in textObj) {
        playList.push({
          src: require('../assets/music/' + voice + '.mp3'),
          artist: textObj[voice][state.language].split('：')[0],
          title: textObj[voice][state.language].split('：')[1]
        })
      }

      const cids = state.selectedPattern.split('_').map(cid => cid.replace(/[xyz]/g, ''))
      for (const trackId in playList) {
        const cid = cids[trackId]
        playList[trackId]['pic'] = charactor[cid].img
      }

      return playList
    }

    return []
  }
}

function getAvailablePatterns(state) {
  let dialogue
  switch (state.game) {
    case 'main':
    {
      dialogue = state.dialogue
      break
    }
    case 'torna':
    {
      dialogue = state.dialogueDlc
    }
  }
  const dialoguePatterns = Object.keys(dialogue)
  const selectedCid = state.selectedChara.map(x => x.cid) // 已选择的角色id
  let availablePatterns = []
  if (selectedCid.length) {
    availablePatterns = dialoguePatterns.filter(
      pattern => selectedCid.map(
        cid => pattern.replace(/[a-z]/g, '').split('_').includes(cid)
      ).reduce((a, b) => a && b)
    )
  } else {
    availablePatterns = dialoguePatterns
  }
  return availablePatterns
}

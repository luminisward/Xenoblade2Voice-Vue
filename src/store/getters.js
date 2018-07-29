export default {

  availablePatterns(state) {
    return getAvailablePatterns(state)
  },

  charaList(state) {

    let availablePatterns = getAvailablePatterns(state)
    let charaList = []

    // Set去重
    let cids = new Set(
      availablePatterns.map(
        pattern => pattern.split('_')
      ).reduce(
        (x, y) => x.concat(y)
      ).map(
        cid => cid.replace('x', '')
      )
    )

    // 去除已选的角色
    let selectedCid = state.selectedChara.map(x => x.cid)
    selectedCid.map(cid => cids.delete(cid))

    // 生成charaList
    cids = Array.from(cids)
    cids.map(
      cid => {
        charaList.push({
          'cid': cid,
          'name': state.charactor[cid].name,
          'img': require('../assets/image/' + cid + '.png')
        })
      }
    )

    // 按cid排序
    return charaList.sort((x, y) => parseInt(x.cid) - parseInt(y.cid))
  },

  charaBoxList(state) {
    let ret = []
    for (let i of state.selectedChara) {
      ret.push(i);
    }

    let i = state.selectedChara.length
    while (i < 3) {
      ret.push({
        img: '',
        name: {
          CN: ''
        }
      })
      i += 1
    }
    return ret;
  },

  dialogueTextList(state) {
    if (state.selectedPattern) {
      let textObj = state.dialogue[state.selectedPattern]['text']
      for (let voice in textObj) {
        textObj[voice]['voice'] = require('../assets/music/'+ voice + '.mp3')
        textObj[voice]['speaker'] = textObj[voice]['CN'].split('：')[0]
        textObj[voice]['text'] = textObj[voice]['CN'].split('：')[1]
      }
      return Object.values(textObj)
    }
      
    return []
  },

  playList(state) {
    if (state.selectedPattern) {
      let textObj = state.dialogue[state.selectedPattern]['text']
      let ret = []
      for (let voice in textObj) {
        ret.push({
          src: require('../assets/music/'+ voice + '.mp3'),
          artist: textObj[voice]['CN'].split('：')[0],
          title: textObj[voice]['CN'].split('：')[1]
        })
      }
      return ret
    }
      
    return []
  }
}

function getAvailablePatterns(state) {

  let dialoguePatterns = Object.keys(state.dialogue)
  let selectedCid = state.selectedChara.map(x => x.cid) // 已选择的角色id
  let availablePatterns = []
  if (selectedCid.length) {
    availablePatterns = dialoguePatterns.filter(
      pattern => selectedCid.map(
        cid => pattern.includes(cid)
      ).reduce((a, b) => a && b)
    )
  } else {
    availablePatterns = dialoguePatterns
  }
  return availablePatterns
}

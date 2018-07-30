<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="8" style="float: right">
          <player/>
        </b-col>
        <b-col md="4">
          <talk-order/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <selected-box />
        </b-col>
      </b-row>
      <CharacterSelector/>
    <footer>
          <pre>
版本: v0.2

数据挖掘:
@Moosehunter(Xenoblade Subreddit Discord)

对话听写与翻译:
@vinsanityvc(NGA)
@takamana(stage1st)

游戏内对话确认协助:
@天天の幻想(Baidu Tieba: 异度之刃)
@nanami_c(Baidu Tieba: 异度之刃)
@黑礼帽的誓言(Baidu Tieba: 异度之刃)

制作:
xenoblade2.cn
          </pre>
    </footer>
    </b-container>
  </div>
</template>

<script>
import CharacterSelector from './components/CharacterSelector.vue'
import SelectedBox from './components/SelectedBox.vue'
import TalkOrder from './components/TalkOrder.vue'
// import Dialogue from './components/Dialogue.vue'
import Player from './components/Player.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    CharacterSelector,
    SelectedBox,
    // Dialogue,
    TalkOrder,
    Player
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

pre {
  color: white;
  padding-top: 1rem;
}

body {
  background-color: #272b32;
}

</style>

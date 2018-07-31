<template>
  <div id="app">
    <Layout>
      <Sider class="sidebar" width="300" >
        <selected-box :button-size="90"/>
        <talk-order :height="881"/>
      </Sider>
      <Layout class="main">
          <player style="overflow: visible;" />
          <talk-order class="sm" :height="201"/>
          <selected-box :button-size="70" class="sm"/>
          <h2>角色选择</h2>
          <CharacterSelector />
      </Layout>
    </Layout>
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
    TalkOrder,
    Player
  }
}
</script>

<style lang="scss">
.main {
  padding: 0px 24px 24px;
  height: 1000px;
}

.sidebar {
  background: #fff;
}

h2 {
  text-align: center;
  padding: 5px;
}

.sm {
   display: none;
}

@media screen and (max-width: 680px) {
    .sidebar {
      display: none;
    }
    .sm {
      display: block;
    }
    div.scroll {
      img {
        width: 70px;
      }
      .ivu-btn {
        margin: 1px;
      }
    }
}
</style>

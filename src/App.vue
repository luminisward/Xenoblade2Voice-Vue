<template>
  <div id="app">
    <Layout>
      <Sider class="sidebar" width="300" >
        <selected-box :button-size="90"/>
        <talk-order :height="866"/>
      </Sider>
      <Layout class="main">
        <switch-language/>
        <player style="overflow: visible;" />
        <talk-order :height="201" class="sm" />
        <selected-box :button-size="70" class="sm"/>
        <switch-charactor />
        <character-selector />
      </Layout>
    </Layout>
  </div>
</template>

<script>
import CharacterSelector from './components/CharacterSelector.vue'
import SelectedBox from './components/SelectedBox.vue'
import TalkOrder from './components/TalkOrder.vue'
import SwitchLanguage from './components/SwitchLanguage.vue'
import SwitchCharactor from './components/SwitchCharactor.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    CharacterSelector,
    SwitchCharactor,
    SelectedBox,
    TalkOrder,
    Player,
    SwitchLanguage
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.main {
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
      margin: 5px;
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

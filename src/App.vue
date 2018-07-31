<template>
  <div id="app">
    <Layout>
      <Sider  width="300" :style="{background: '#fff'}">
        <talk-order/>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
          <player/>
          <Content>
            <CharacterSelector/>
          </Content>
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
    // SelectedBox,
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

@media screen and (max-width: 760px) {
    
}

</style>

<template>
  <div id="app">
    <img src="./assets/icon/titlelogo_cn.png">
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="4">
          <talk-order/>
          <selected-box/>
        </b-col>
        <b-col md="8"><player/></b-col>
      </b-row>
      <CharacterSelector/>
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
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>

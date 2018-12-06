<template>
  <aplayer ref="player" :music="playList[0]" :list="playList" repeat="none" />
</template>

<script>
import Aplayer from '../vendor/vue-aplayer.min.js'

export default {

  components: {
    Aplayer
  },

  computed: {
    playList() {
      return this.$store.getters.playList
    },
    thenPlay() {
      return this.$store.state.thenPlay
    }
  },

  watch: {
    thenPlay() {
      this.$refs.player.thenPlay()
    }
  }
}
</script>

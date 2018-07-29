<template>
  <aplayer :music="playList[0]" :list="playList" repeat="none"/>
</template>

<script>
import Aplayer from '../vendor/vue-aplayer.min.js'

export default {

  computed: {
    playList() {
      return this.$store.getters.playList
    
    },
    
  },
  methods: {
    playNext(event) {
      console.log(event)
    }
  },

  components: {
    Aplayer
  }
}
</script>

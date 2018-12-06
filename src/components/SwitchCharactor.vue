<template>
  <div style="text-align: center;">
    <h2 style="display: inline-block">角色选择: </h2>
    <RadioGroup v-model="language" type="button" size="large">
      <Radio label="main">正篇</Radio>
      <Radio label="torna">黄金之国伊拉</Radio>
    </RadioGroup>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    language: {
      get() {
        return this.$store.state.game
      },
      set(value) {
        this.setGame(value)
      }
    }
  },
  methods: mapMutations(['setGame'])

}
</script>

<template>
  <div>
    <h2 style="display: inline-block">文本切换: </h2>
    <RadioGroup v-model="language" type="button" size="large">
      <Radio label="CN">简体中文</Radio>
      <Radio label="JP">日语</Radio>
    </RadioGroup>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    language: {
      get() {
        return this.$store.state.language
      },
      set(value) {
        this.setLanguage(value)
      }
    }
  },

  methods: mapMutations(['setLanguage'])

}
</script>

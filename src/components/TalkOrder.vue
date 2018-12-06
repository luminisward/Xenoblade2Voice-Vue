<template>
  <Table
    ref="currentRowTable"
    :columns="columns"
    :data="talkList"
    :height="height"
    highlight-row
    size="small"
    @on-current-change="select"
  />
</template>

<script>
import { mapMutations } from 'vuex'

export default {

  props: {
    height: { type: Number, default: 200 }
  },

  data() {
    return {
    }
  },

  computed: {
    columns() {
      const patternCount = this.$store.getters.availablePatterns.length
      return [{ title: '对话组合数: ' + patternCount, key: 'text' }]
    },

    talkList() {
      let dialogue
      switch (this.$store.state.game) {
        case 'main':
        {
          dialogue = this.$store.state.dialogue
          break
        }
        case 'torna':
        {
          dialogue = this.$store.state.dialogueDlc
        }
      }
      return this.$store.getters.availablePatterns.map(
        pattern => {
          return {
            'pattern': pattern,
            'text': dialogue[pattern].name[this.$store.state.language]
          }
        })
    }

  },

  methods: {
    ...mapMutations(['setPattern']),
    select(rowData) {
      this.setPattern(rowData.pattern)
    }
  }
}
</script>

<style>
.ivu-table-cell {
  font-size: 14px;
}
</style>

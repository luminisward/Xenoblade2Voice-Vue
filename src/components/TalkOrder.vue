<template>
  <Table
    highlight-row
    ref="currentRowTable"
    :columns="columns"
    :data="talkList"
    :height="height"
    @on-current-change="select"
    size="small"
    ></Table>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  
  props: [
    'height'
  ],
  
  data() {
    return {
    }
  },

  computed: {
    columns() {
      let patternCount = this.$store.getters.availablePatterns.length
      return [{ title: '对话组合数: ' + patternCount, key: 'text' }]
    },

    talkList() {
      return this.$store.getters.availablePatterns.map(
        pattern => { return {
          'pattern': pattern,
          'text': this.$store.state.dialogue[pattern].name[this.$store.state.language]
      }})
    },

  },

  methods: {
    ...mapMutations(['setPattern']),
    select(rowData){
      this.setPattern(rowData.pattern)
    },
  }
}
</script>

<style>
.ivu-table-cell {
  font-size: 14px;
}
</style>

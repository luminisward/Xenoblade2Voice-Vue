<template>
  <Table highlight-row ref="currentRowTable" :columns="columns" :data="talkList" :height="height" @on-current-change="select" size="small"></Table>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  
  props: [
    'height'
  ],
  
  data() {
    return {
      columns: [
        {
          title: '对话组合',
          key: 'text'
        },
      ],
    }
  },

  computed: {
    talkList() {
      return this.$store.getters.availablePatterns.map(
        pattern => { return {
          'pattern': pattern,
          'text': this.$store.state.dialogue[pattern].name.CN
      }})
    },
    ...mapState({
      selected: 'selectedPattern'
    })
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

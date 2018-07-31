<template>
  <Table highlight-row ref="currentRowTable" :columns="columns" :data="talkList" height="300" @on-current-change="select"></Table>

</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      columns: [
        {
          title: ' ',
          key: 'text'
        },

      ]
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
    }
  }
}
</script>

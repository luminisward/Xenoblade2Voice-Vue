<template>
  <div>
    <b-form-select v-model="selected" @change="select" :options="talkList" class="mb-3" :select-size="8">
    </b-form-select>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
    }
  },
  computed: {
    talkList() {
      return this.$store.getters.availablePatterns.map(
        pattern => { return {
          'value': pattern,
          'text': this.$store.state.dialogue[pattern].name.CN
      }})
    },
    ...mapState({
      selected: 'selectedPattern'
    })
  },
  methods: {
    ...mapMutations(['setPattern']),
    select(value){
      this.setPattern(value)
    }
  }
}
</script>

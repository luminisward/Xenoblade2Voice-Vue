<template>
  <div>
    <b-form-select v-model="selected" @change="select" :options="talkList" class="mb-3" :select-size="8">
    </b-form-select>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      selected: this.$store.state.selectedPattern
    }
  },
  computed: {
    talkList() {
      return this.$store.getters.availablePatterns.map(
        pattern => { return {
          'value': pattern,
          'text': this.$store.state.dialogue[pattern].name.CN
      }})
    }
  },
  methods: {
    ...mapMutations(['setPattern']),

    select(value){
      this.setPattern(value)
    }
  }
}
</script>

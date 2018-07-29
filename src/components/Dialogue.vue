<template>
  <div>
    <b-form-select :options="dialogueText" class="mb-3" :select-size="8" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    dialogueText() {
      return this.$store.getters.dialogueTextList.map(
        obj => { return {
          'value': obj['voice'],
          'text': obj['CN']
        }})
    }
  },
  methods: {

  }
}

</script>

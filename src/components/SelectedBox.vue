<template>
  <div>
    <b-button @click="remove" variant="light" class="mb-4" v-for="i in box" :key="i">
      <b-img :src="charaBoxList[i].img" :cid="charaBoxList[i].cid" width="90px" />
    </b-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      box: [0, 1, 2]
    }
  },
  computed: mapGetters(["charaBoxList"]),
  methods: {
    ...mapMutations([
      'removeSelectedChara'
    ]),
    remove(event) {
      let cid = event.target.getAttribute('cid')
      if (cid) {
        this.removeSelectedChara(cid)
      }
    },
  }
};
</script>

<style scoped>
button.btn{
  width: 90px;
  height: 90px;
  margin-right: 8px;
  margin-left: 8px;
  padding: 0;
  border: 0;
}
</style>

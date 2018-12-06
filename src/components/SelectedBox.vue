<template>
  <div>
    <h2>已选角色（点击移除）</h2>
    <div style="overflow: hidden; text-align: center;">
      <Button v-for="i in [0, 1, 2]" :key="i" :cid="charaBoxList[i].cid" :style="{ width: buttonSize + 'px', height: buttonSize + 'px'}" @click="remove">
        <img :src="charaBoxList[i].img" :cid="charaBoxList[i].cid" :style="{ width: buttonSize + 'px'}" />
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {

  props: {
    buttonSize: { type: Number, default: 70 }
  },

  data() {
    return {
    }
  },

  computed: mapGetters(['charaBoxList']),

  methods: {
    ...mapMutations([
      'removeSelectedChara'
    ]),
    remove(event) {
      const cid = event.target.getAttribute('cid')
      if (cid) {
        this.removeSelectedChara(cid)
      }
    }
  }
}
</script>

<style scoped>
button {
  margin: 0px 4px 7px;
  padding: 0;
  border-radius: 0;
  box-sizing: content-box;
}
</style>

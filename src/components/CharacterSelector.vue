<template>
  <div class="scroll">
    <ul style="text-align: left;">
      <li v-for="chara in charaList" :key="chara.cid">
        <Button :name="chara.cid" @click="selectChara" >
          <img :src="chara.img" :name="chara.cid"/>
        </Button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["charaList"])
  },
  methods: {
    ...mapMutations(["addChara", "setPattern"]),

    selectChara(event) {
      let cid = event.target.name;
      console.log(cid)
      if (cid) {
        this.addChara(cid)
        this.setPattern(this.$store.getters.availablePatterns[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 90px;
}

div.card-body {
  padding: 0.5rem;
  text-align: center;
  overflow: hidden;
  font-size: 12px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 3px;
}

.btn {
  padding: 0;
  border: 0;
}

.scroll {
  height: 438px;
  overflow: auto;
  
}
</style>

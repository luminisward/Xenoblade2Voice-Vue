<template>

  <ul style="text-align: left;">
    <li v-for="chara in charaList" :key="chara.cid">
      <b-button :cid="chara.cid" @click="selectChara" variant="light" class="mb-3">
        <b-card :img-src="chara.img" :img-alt="chara.name.CN" img-top :alt="chara.name.CN">
          {{ chara.name.CN }}
        </b-card>
      </b-button>
    </li>
  </ul>

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
      let cid = event.target.parentNode.parentNode.getAttribute("cid");
      if (cid) {
        this.addChara(cid)
        this.setPattern(this.$store.getters.availablePatterns[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.card {
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
  margin: 0 10px;
}

.btn {
  padding: 0;
  border: 0;
}
</style>

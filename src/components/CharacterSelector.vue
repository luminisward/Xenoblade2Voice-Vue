<template>
  <div class="scroll">
    <ul style="text-align: left;">
      <li v-for="chara in charaList" :key="chara.cid">
        <Tooltip :content="chara.name[language]" :delay="500" placement="top" transfer>
          <Button :name="chara.cid" type="text" ghost @click="selectChara" >
            <img :src="chara.img" :name="chara.cid"/>
          </Button>
        </Tooltip>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['charaList']),
    language() {
      return this.$store.state.language
    }
  },
  methods: {
    ...mapMutations(['addChara']),

    selectChara(event) {
      const cid = event.target.name
      if (cid) {
        this.addChara(cid)
      }
    }
  }
}
</script>

<style lang="scss">
.scroll {

  overflow: auto;

  img {
    width: 90px;
    box-shadow:1px 1px 5px #333333;
  }

  .card-body {
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

  .ivu-btn {
    padding: 0;
    margin: 4px;
  }

}

</style>

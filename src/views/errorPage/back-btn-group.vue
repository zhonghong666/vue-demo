<template>
  <div>
    <a-button size="large" type="text" @click="backHome" style="margin-right: 16px;">返回首页</a-button>
    <a-button size="large" type="text" @click="backPrev">返回上一页({{ second }}s)</a-button>
  </div>
</template>

<script>
export default {
  name: 'backBtnGroup',
  data() {
    return {
      second: 105,
      timer: null
    }
  },
  methods: {
    backHome() {
      this.$router.replace({
        name: 'home'
      })
    },
    backPrev() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

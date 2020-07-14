<template>
  <div>
    <img src="@/assets/logo.png">
    <h1>Hello Vue!</h1>
    <button @click="inc">Clicked {{ count }} times.</button>
    <br />
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    inc: function() {
      this.count += 1;
    }
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
img {
  width: 100vw;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

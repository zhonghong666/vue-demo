<template>
  <div class="container">
    <img src="@/assets/logo.png">
    <h1>Hello Vue!</h1>
    <button @click="inc">Clicked {{ count }} times.</button>
    <br />
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
import {getHome} from '@/api/home/home.js';
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
      getHome({bookId: 179779}).then((data) => {
        this.$message({
          message: JSON.stringify(data),
          type: 'warning'
        });
      }).catch((err) => {
        this.$message.error(err.message);
      });
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>

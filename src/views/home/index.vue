<template>
  <div>
    <img src="@/assets/logo.png">
    <h1>Hello Vue 3!</h1>
    <button @click="inc">Clicked {{ count }} times.</button>
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
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

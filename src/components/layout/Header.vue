<template>
  <div id="nav">
    <router-link class="menu" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#nav {
  background: darkslateblue;
  padding: 20px;
  position: fixed;
  width: 100%;
}

#nav .menu{
  color: white;
  padding: 0px;
  margin: 10px;
  text-decoration: none;
}
</style>
<template>
  <v-app>
    <v-main>
      <Nav />
    </v-main>
  </v-app>
</template>

<script>
import Nav from '@/components/layout/Nav'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    Nav
  }
}
</script>

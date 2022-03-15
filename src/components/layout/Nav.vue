<template>
  <v-card class="nav">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="관리자"
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item :prepend-icon="item.icon" :title="item.title" v-for="item in items" :key="item.title"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100%">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: '대시보드', icon: 'mdi-home-city' },
          { title: '모델환경관리', icon: 'mdi-account' },
          { title: '공통환경관리', icon: 'mdi-account-group-outline' },
        ],
        drawer: true,
        rail: true,
      }
    },
  }
</script>
<style>

</style>
<template>
  <Navbar v-if="!$route.meta.noNav"></Navbar>
  <Notification></Notification>
  <router-view></router-view>
</template>

<script>
import Navbar from './Navbar.vue'
import Notification from './Notification.vue'

export default {
  components: {
    Navbar,
    Notification,
  },
}
</script>

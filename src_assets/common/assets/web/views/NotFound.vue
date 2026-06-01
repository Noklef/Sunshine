<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card">
          <div class="card-body text-center">
            <h1 class="h3 mb-3">404</h1>
            <p class="text-muted mb-4">{{ $route.fullPath }}</p>
            <router-link class="btn btn-primary" to="/">
              <home :size="18" class="icon"></home>
              {{ $t('navbar.home') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Home } from '@lucide/vue'

  export default {
    components: {
      Home,
    },
  }
</script>

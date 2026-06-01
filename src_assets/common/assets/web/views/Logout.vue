<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card">
          <div class="card-body text-center">
            <img src="/images/logo-sunshine-45.png" height="45" alt="Sunshine" class="mb-3">
            <h1 class="h3 mb-3">{{ $t('logout.logged_out') }}</h1>
            <p class="text-muted mb-4">{{ $t('logout.logged_out_desc') }}</p>
            <!-- Hard navigation (not router-link) so the server re-issues the Basic Auth challenge -->
            <a class="btn btn-primary" href="/">
              <log-in :size="18" class="icon"></log-in>
              {{ $t('logout.login') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { LogIn } from '@lucide/vue'

  export default {
    components: {
      LogIn,
    },
  }
</script>

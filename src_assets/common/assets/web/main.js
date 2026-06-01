import { createApp } from 'vue'
import initLocale from './locale'
import App from './App.vue'
import router from './router'

// must import even if not implicitly using here
// https://github.com/aurelia/skeleton-navigation/issues/894
// https://discourse.aurelia.io/t/bootstrap-import-bootstrap-breaks-dropdown-menu-in-navbar/641/9
import 'bootstrap/dist/js/bootstrap'

// Wait for locale initialization, then create and mount the single SPA root.
initLocale().then((i18n) => {
    const app = createApp(App)
    app.use(i18n)
    app.use(router)
    app.provide('i18n', i18n.global)
    app.mount('#app')
})

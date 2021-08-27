<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
</style>

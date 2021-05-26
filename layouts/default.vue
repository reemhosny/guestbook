<template>
  <div class="wrapper main-layout">
    <!-- App Header -->
    <appHeader />

    <!-- View Pages -->
    <main class="view-page">
      <nuxt />
    </main>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "../components/appHeader";
export default {
  components: {
    appHeader,
  },
};
</script>
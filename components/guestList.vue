<template>
  <section class="guest-list">
    <div v-for="guest in allGuestLists" :key="guest.index" class="my-5">
      <nuxt-link to="" class="guest-list__owner"
        ><h3>{{ guest.owner }}</h3></nuxt-link
      >

      <p class="guest-list__text">
        {{ guest.text }}
      </p>
      <button class="btn btn-delete">Delete</button>
    </div>
  </section>
</template>

<script>
import { allGuestLists } from "../static/guests";
export default {
  data() {
    return {
      allGuestLists,
    };
  },
};
</script>
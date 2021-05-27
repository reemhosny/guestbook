<template>
  <section class="container">
    <div class="row">
      <!--Guest List-->
      <div class="col-md-8 col-12">
        <guestList />
      </div>

      <!--Add new guest text-->
    </div>

    <div class="col-md-4 col-12">
      <!-- <guestList /> -->
    </div>
  </section>
</template>

<script>
import guestList from "@/components/guestList";

export default {
  components: {
    guestList,
  },
};
</script>


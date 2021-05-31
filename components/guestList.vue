<template>
  <section class="guest-list">
    <div v-for="guest in allGuestLists" :key="guest.index" class="my-5">
      <nuxt-link to="" class="guest-list__owner"
        ><h3>{{ guest.title }}</h3></nuxt-link
      >

      <p class="guest-list__text">
        {{ guest.content }}
      </p>

      <!-- show if user logged in btns -->
      <div class="d-flex mt-3">
        <!--Reply to message -->
        <button class="btn btn-reply" @click="replyToGuest(guest.id)">
          Reply
        </button>

        <!--Edit Message -->
        <button class="btn btn-edit mx-3" @click="updateGuest(guest.id)">
          Edit
        </button>

        <!--Delete message -->
        <button class="btn btn-delete" @click="deleteGuest(guest.id)">
          Delete
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { allGuests, deleteGuestById } from "../api/guest";
export default {
  data() {
    return {
      allGuestLists: [],
      guestId: "",
    };
  },

  methods: {
    // delete guest
    deleteGuest(id) {
      // this.guestId = id;
      deleteGuestById(id).then((res) => {
        console.log("deleteGuestById", res.data);
      });
    },
  },

  mounted() {
    allGuests().then((res) => {
      this.allGuestLists = res.data;
      console.log("allGuestLists", this.allGuestLists);
    });
  },
};
</script>
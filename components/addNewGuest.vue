<template>
  <section class="add-new-guest">
    <form class="form-block h-400 mt-5" @submit.prevent="createNewGuest()">
      <h2 class="nav__slogan text-center mt-4">Start your Adventure</h2>
      <!--user name -->
      <div class="input-field mt-4">
        <input
          type="text"
          placeholder="Username"
          name="username"
          class="form-input my-4"
          v-model="form.username"
        />
      </div>

      <!--Text -->
      <div class="input-field mb-4">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Text here"
          class="form-input h-90"
          v-model="form.content"
        ></textarea>
      </div>

      <button class="btn btn--gold my-4" type="submit">Add</button>
    </form>
  </section>
</template>

<script>
import { newMessage } from "../api/guest";
export default {
  data() {
    return {
      form: {
        username: "",
        content: "",
      },
    };
  },
  methods: {
    createNewGuest() {
      console.log("create content", this.form);
      newMessage(this.form).then((res) => {
        console.log("create res", res.data);
      });
    },
  },
};
</script>
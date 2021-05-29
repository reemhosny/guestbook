<template>
  <section class="container text-center">
    <form class="form-block" @submit.prevent="onSubmit()">
      <h2 class="form-block__title mt-5">Create new account</h2>
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

      <!--email -->
      <div class="input-field mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          class="form-input"
          v-model="form.email"
        />
      </div>

      <!--password -->
      <div class="input-field mb-4">
        <input
          type="password"
          placeholder="Password"
          name="password"
          class="form-input"
          v-model="form.password"
        />
      </div>

      <!-- <nuxt-link to="/">Forgot your password?</nuxt-link> -->

      <button class="btn btn--gold my-4" type="submit">Sign up</button>
      <div class="mt-4">
        Already member?
        <nuxt-link to="/sign-up" class="new-account"> Log in</nuxt-link>
      </div>
    </form>
  </section>
</template>

<script>
import { register } from "../api/auth";
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("register", this.form);
      register(this.form).then((res) => {
        console.log("register res", res.data);
      });
    },
  },
};
</script>
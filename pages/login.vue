<template>
  <section class="container text-center">
    <form class="form-block" @submit.prevent="onSubmit()">
      <h2 class="form-block__title mt-5">Login to your account</h2>
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

      <nuxt-link to="/" class="forgot-password"
        >Forgot your password?</nuxt-link
      >

      <button class="btn btn--gold my-4" type="submit">Log In</button>
      <div class="mt-4">
        Don't have an account?
        <nuxt-link to="/sign-up" class="new-account">
          Create an account</nuxt-link
        >
      </div>
    </form>
  </section>
</template>

<script>
import { login } from "../api/auth";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      logedIn: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("login", this.form);
      login(this.form).then((res) => {
        this.form = "";
        this.$store.commit("auth/setUserData", res.data);
        // localStorage.setItem("userID", res.data.user.id);
        // localStorage.setItem("loggedIn", (this.logged = true));
        this.$router.push("/");
        this.succsess_login = true;
        localStorage.setItem("loggedIn", this.succsess_login);
        console.log("loggedIn", localStorage.getItem("loggedIn"));
      });
    },
  },
};
</script>
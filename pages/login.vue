<template>
  <section class="container text-center">
    <form class="form-block">
      <h2 class="form-block__title mt-5">Login to your account</h2>
      <!--user name -->
      <div class="input-field mt-4">
        <input
          type="text"
          placeholder="Username"
          name="username"
          class="form-input my-4"
        />
      </div>

      <!--password -->
      <div class="input-field mb-4">
        <input
          type="password"
          placeholder="Password"
          name="password"
          class="form-input"
        />
      </div>

      <nuxt-link to="/" class="forgot-password"
        >Forgot your password?</nuxt-link
      >

      <button class="btn btn--gold my-4">Log In</button>
      <div class="mt-4">
        Don't have an account?
        <nuxt-link to="/sign-up" class="new-account">
          Create an account</nuxt-link
        >
      </div>
    </form>
  </section>
</template>
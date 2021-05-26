<template>
  <header>
    <nav class="nav container">
      <!--app logo-->
      <nuxt-link to="/" class="d-flex nav-item">
        <img src="~/assets/images/logo.png" alt="logo" class="logo" />
        <span class="nav__slogan">Adventure Begins</span>
      </nuxt-link>
      <div class="d-flex">
        <nuxt-link to="/login" class="btn btn-login">Log in</nuxt-link>
        <nuxt-link to="/sign-up" class="btn btn-sign-up">Sign up</nuxt-link>
      </div>
    </nav>
  </header>
</template>
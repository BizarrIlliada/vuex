<template>
  <button v-if="!isLogged" @click="login">
    Login
  </button>
  <button v-else @click="logout">
    Logout
  </button>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'UserAuth',

    props: {
      isLogged: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    methods: {
      ...mapActions(['login', 'logout']),
    }
  }
</script>

<style scoped>
  button {
    display: block;
    margin: 0 auto;
  }
</style>

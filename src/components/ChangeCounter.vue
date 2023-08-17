<template>
  <button @click="increment">
    Add 1
  </button>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'ChangeCounter',

    methods: {
      ...mapActions('counterModule', ['increment']),
    }
  }
</script>

<style scoped>
</style>

<template>
  <BaseContainer title="Vuex">
    <h3>
      {{ $store.getters.getCounter }}
    </h3>
    <div v-if="currentUser">
      <div>
        {{ currentUser.name }}
      </div>
      <div>
        {{ currentUser.date }}
      </div>
      <div>
        {{ currentUser.permissions }}
      </div>
      <div>
        {{ currentUser.id }}
      </div>
    </div>
    <ChangeCounter />
    <button @click="increase({ value: 10} )">Add 10</button>
    <FavoriteValue></FavoriteValue>
  </BaseContainer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import BaseContainer from './components/UI/BaseContainer.vue';
  import ChangeCounter from './components/ChangeCounter.vue';
  import FavoriteValue from './components/FavoriteValue.vue';

  export default {
    components: {
      BaseContainer,
      ChangeCounter,
      FavoriteValue,
    },

    computed: {
      ...mapGetters(['getUsers']),

      currentUser() {
        return this.getUsers.filter(user => user.id === '-NbeS61ldKof2h3xocLj')[0];
      }
    },

    methods: {
      ...mapActions(['increase', 'fillUsers'])
    },

    async created() {
      await this.fillUsers();
    }
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
<template>
  <section v-if="isLogged">
    <BaseContainer>
      <div class="buttons-container">
        <button
          v-for="user of users"
          :key="user.id"
          @click="setCurrentUser(user.id)"
          :class="{ active: getActiveButtonClass(user.id) }"
        >
          {{ user.name }}
        </button>
      </div>
    </BaseContainer>
    <UserCard
      v-if="currentUser"
      :name="currentUser.name"
      :date="currentUser.date"
      :permissions="currentUser.permissions"
    />
    <BaseContainer title="Vuex">
      <h3>
        {{ counter }}
      </h3>
      <FavoriteValue />
      <ChangeCounter />
      <button @click="increase({ value: 10} )">Add 10</button>
    </BaseContainer>
  </section>

  <BaseContainer title="Auth">
    <UserAuth :isLogged="isLogged" />
  </BaseContainer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import FavoriteValue from './components/FavoriteValue.vue';
  import ChangeCounter from './components/ChangeCounter.vue';
  import UserAuth from './components/UserAuth.vue';
  import UserCard from './components/UserCard.vue';

  export default {
    components: {
      ChangeCounter,
      FavoriteValue,
      UserAuth,
      UserCard,
    },

    data() {
      return {
        currentUser: null,
      }
    },

    computed: {
      ...mapGetters('usersModule', {
        users: 'getUsers',
      }),
      ...mapGetters('counterModule', {
        counter: 'getCounter',
      }),
      ...mapGetters({
        isLogged: 'getIsLoggedIn',
      }),

      // counter() {
      //   return this.$store.getters['counterModule/getCounter']
      // },
    },
    
    methods: {
      ...mapActions('counterModule', ['increase']),
      ...mapActions('usersModule', ['fillUsers']),

      setCurrentUser(userId) {
        this.currentUser = this.users.find(user => user.id === userId);
      },

      getActiveButtonClass(userId) {
        return this.currentUser && userId === this.currentUser.id;
      },
    },

    watch: {
      isLogged() {
        if (this.isLogged === false) {
          this.currentUser = null;
        }
      }
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

  button {
    width: 100px;
    border: 1px solid #add8e6;
    border-radius: 5px;
    background-color: #fff;
    transition: 0.3s;
  }
  
  button:hover {
    background-color: #add8e69f;
  }

  button.active {
    background-color: #add8e6;
  }

  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
</style>

<template>
  <h3> Favorite: {{ $store.getters.getFavoriteCounter }} </h3>
</template>

<script>
  export default {
    name: 'FavoriteValue',
  }
</script>

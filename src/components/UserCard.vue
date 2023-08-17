<template>
  <BaseContainer title="User">
    <div>
      {{ name }}
    </div>
    <div>
      {{ date }}
    </div>
    <div class="permissions-container">
      <span v-for="permission of permissions" :key="permission">
        {{ permission }}
      </span>
    </div>
  </BaseContainer>
</template>

<script>
  export default {
    name: 'UserCard',
    props: {
      name: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      permissions: {
        type: Array,
        required: false,
        default: () => [],
      },
    }
  }
</script>

<style scoped>
  .permissions-container {
    display: flex;
    gap: 10px;
  }

  div {
    margin-bottom: 10px;
  }
</style>

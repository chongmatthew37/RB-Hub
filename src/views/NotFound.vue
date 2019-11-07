<template>
  <div class="notfound text-center">
    <h1 class="display-4">
      Error 404
    </h1>
    <h3 class="display-1">
      Looks like you're lost!
    </h3>
    <router-link to="/">Back to home</router-link>
  </div>
</template>
<script>

export default {
  name: 'NotFound'
};

</script>
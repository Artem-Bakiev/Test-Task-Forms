<template>
  <div class="home">
    <TableOfUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import TableOfUser from '@/components/table-of-user.vue';

export default {
  name: 'Home',
  components: {
    TableOfUser,
  },
};
</script>

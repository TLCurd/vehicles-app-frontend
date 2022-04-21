<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/vehicles");
  },
};
</script>

<template>
  <div class="logout-view"></div>
</template>
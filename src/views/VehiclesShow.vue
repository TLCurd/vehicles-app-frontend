<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        message: "OMG, what a SICK WHIP!",
        vehicle: {}
      };
    },
    created: function () {
      this.showVehicle()
    },
    methods: {
      showVehicle: function() {
        console.log('showing a whip...');
        console.log(this.$route.params.id);
        axios.get(`/vehicles/${this.$route.params.id}.json`).then(response => {
          console.log(response.data);
          this.vehicle = response.data;
        })
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>
      {{vehicle.make}} {{vehicle.model}}
    </h2>
    <img v-bind:src="vehicle.image">
    <br>
    Category: {{vehicle.vehicle_type}}
    <br>
    This vehicle was produced from {{vehicle.years_made}}
    <hr>
    <router-link to="/vehicles">Back to all the whips</router-link>
  </div>
</template>

<style></style>
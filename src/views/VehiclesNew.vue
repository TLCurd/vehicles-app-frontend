<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        message: "Go ahead and add that Whip!",
        newVehicleParams: {
          make: "",
          model: "",
          vehicle_type: "",
          image_url: "",
          years_made: ""
        },
        errors: []
      };
    },
    created: function () {},
    methods: {
      createVehicle: function () {
        console.log('creating vehicle...')
        axios.post(`/vehicles.json`, this.newVehicleParams).then(response => {
          console.log(response.data),
          this.$router.push('/vehicles')
        }).catch((error) => {
          console.log("vehicles create error", error.response);
          this.errors = error.response.data.errors;
        });
      }
    },
  };
</script>

<template>
  <div class="vehicles-new">
    <h1>{{ message }}</h1>
    <hr>
    <form v-on:submit.prevent="createVehicle()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      

      <p>
        Make:
        <input type="text" v-model="newVehicleParams.make" />
        <small v-if="newVehicleParams.make.length <= 20 && newVehicleParams.make.length > 0">{{
          30 - newVehicleParams.make.length
        }} characters remaining</small>
        <b><small v-if="newVehicleParams.make.length >= 20 && newVehicleParams.make.length <= 30" class="text-warning">{{
          30 -
            newVehicleParams.make.length
        }} characters remaining</small></b>
        <small v-if="newVehicleParams.make.length > 30" class="text-danger">Vehicle make is too long</small>
      </p>

      <p>
        Model:
        <input type="text" v-model="newVehicleParams.model" />
      </p>
      <p>
        Type:
        <input type="text" v-model="newVehicleParams.vehicle_type" />
      </p>
      <p>
        Image URL:
        <input type="text" v-model="newVehicleParams.image_url" />
      </p>
      <p>
        Years Manufactured:
        <input type="text" v-model="newVehicleParams.years_made" />
      </p>

      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<style></style>
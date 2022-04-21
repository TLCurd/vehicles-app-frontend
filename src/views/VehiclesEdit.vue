<script>
import axios from "axios"
export default {
  data: function () {
    return {
      message: "Alright, let's edit that whip!",
      editVehicleParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/vehicles/${this.$route.params.id}.json`).then(response => {
      console.log(response.data);
      this.editPostParams = response.data
    })
  },
  methods: {
    submit: function () {
      console.log('editing a whip...');
      axios.patch(`/vehicles/${this.$route.params.id}.json`, this.editVehicleParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/vehicles/${this.$route.params.id}`)
      }).catch((error) => {
        this.errors = error.response.data.errors;
      })
    }
  },
};
</script>

<template>
  <div class="vehicles-edit">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Make</label>
        <input type="text" v-model="editVehicleParams.make" />
      </div>
      <div>
        <label>Model</label>
        <input type="text" v-model="editVehicleParams.model" />
      </div>
      <div>
        <label>Vehicle Category (ex: SUV, Truck, etc.)</label>
        <input type="text" v-model="editVehicleParams.vehicle_type" />
      </div>
      <div>
        <label>Image URL</label>
        <input type="text" v-model="editVehicleParams.image" />
      </div>
      <div>
        <label>Years Manufactured</label>
        <input type="text" v-model="editVehicleParams.years_made" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    <a v-bind:href="`vehicles/${editVehicleParams.id}`">Show the Whip!</a>
  </div>
</template>

<style>
</style>
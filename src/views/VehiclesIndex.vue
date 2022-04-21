<script>
import axios from "axios"
  export default {
    data: function () {
      return {
        message: "Check out these rides!",
        vehicles: []
      };
    },
    created: function () {
      this.vehiclesIndex()
    },
    methods: {
      vehiclesIndex: function () {
        console.log(`showing vehicles...`)
        axios.get(`/vehicles.json`).then(response =>{
          console.log(response.data);
          this.vehicles = response.data
        })
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
      <div v-for="vehicle in vehicles" v-bind:key="vehicle.id"> 
        <p> <b>Make:</b> {{vehicle.make}} </p>
        <p><b> Model:</b> {{vehicle.model}} </p>
        <p> <b>Years Manufactured:</b> {{vehicle.years_made}} </p>
        <img v-bind:src="vehicle.image">
        <hr>
      
      </div>



  </div>
</template>

<style>
img {
  width: 800px
}</style>
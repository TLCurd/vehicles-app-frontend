<script>
import axios from 'axios';
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js index page for vehicles!",
      vehicles: [],
      searchTerm: ""
    };
  },
  created: function () {
    this.indexVehicles();
  },
  methods: {
    indexVehicles: function () {
      console.log('getting vehicles')
      axios.get('/vehicles.json').then(response => {
        console.log(response.data);
        this.vehicles = response.data;
      })
    },
    filterVehicles: function () {
      return this.vehicles.filter(vehicle => {
        var lowerMake = vehicle.make.toLowerCase();
        var lowerSearchTerm = this.searchTerm.toLowerCase();
        return lowerMake.includes(lowerSearchTerm);
      })
    }
  },
};
</script>

<template>
  <div class="vehicles-index">
    <div class="row">
      <p>Search: <input type="text" v-model="searchTerm"> </p>
      <div class="col-sm-4" v-for="vehicle in filterVehicles()">
        <div class="card">
          <img v-bind:src="vehicle.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ vehicle.make }} {{ vehicle.model }}</h5>
            <p class="card-text">{{ vehicle.vehicle_type }} </p>
            <p class="card-text">{{ vehicle.years_made }} </p>
          </div>
          <!-- <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ vehicle.directions }}</li>
            <li class="list-group-item">{{ vehicle.prep_time }}</li>

          </ul> -->
          <div class="card-body">
            <router-link class="card-link" v-bind:to="`/vehicles/${vehicle.id}`">More Info</router-link>
          </div>
        </div>
      </div>
      <br />

    </div>

  </div>
</template>

<style>
/* css selector */
body {
  font-family: Futura, Trebuchet MS, Arial, sans-serif;
  background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dynamic-style.png')
}

img {
  width: 150px;
  height: 200px;
}

/* css property */
</style>





<!-- <script>
import axios from "axios"
export default {
  data: function () {
    return {
      message: "Check out these SICK WHIPS!",
      vehicles: []
    };
  },
  created: function () {
    this.vehiclesIndex()
  },
  methods: {
    vehiclesIndex: function () {
      console.log(`showing vehicles...`)
      axios.get(`/vehicles.json`).then(response => {
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
      <p> <b>Make:</b> {{ vehicle.make }} </p>
      <p><b> Model:</b> {{ vehicle.model }} </p>
      <p> <b>Years Manufactured:</b> {{ vehicle.years_made }} </p>
      <img v-bind:src="vehicle.image">
      <br>
      <router-link v-bind:to="`/vehicles/${vehicle.id}`">More details</router-link>
      <hr>

    </div>



  </div>
</template>

<style>
img {
  width: 800px
}
</style> -->
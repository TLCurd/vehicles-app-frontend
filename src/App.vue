<script>
export default {
  data: function () {
    return {
      isLoggedIn: false
    }
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Sick Whips</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/vehicles">The Whips</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Authentication
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-if="!isLoggedIn"><a class="dropdown-item" href="/login">Login</a></li>
              <li v-if="isLoggedIn"><a class="dropdown-item" href="/logout">Adios</a></li>
              <li v-if="!isLoggedIn">
                <hr class="dropdown-divider">
              </li>
              <li v-if="!isLoggedIn"><a class="dropdown-item" href="/signup">Join the Sick Whips Crew!</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="/recipes/new" class="nav-link">Add a Sick Whip!</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>



<style>
</style>



<!-- <script>
export default {
  data: function () {
    return {
      isLoggedIn: false
    }
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    }
  }
}
</script>


<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sick Whips</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/vehicles">The Whips</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Authentication
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/login">Login</a></li>
              <li><a class="dropdown-item" href="/logout">Adios</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/signup">Want to be a part of the Sick Whip crew?</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/vehicles/new">Add a Whip</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->

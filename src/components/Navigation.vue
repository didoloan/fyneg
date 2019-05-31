<template>
  <div id="navigation">
    <header id="desktop">
      <div id="logo"><img src="../assets/fynegold.svg"  width="60px" height="60px" alt="company logo"></div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/properties">Properties</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </header>
    <header id="mobile">
      <div id="logo"><button id="navbtn" @click="openNav"></button><h2>Fynegold</h2></div>
        <ul ref="navlinks">
        <li v-on:click="closeNav">
          <router-link to="/">Home</router-link>
        </li>
        <li @click="closeNav">
          <router-link to="/properties">Properties</router-link>
        </li>
        <li  @click="closeNav">
          <router-link to="/about">About</router-link>
        </li>
        <li @click="closeNav">
          <router-link to="/contact">Contact</router-link>
        </li>
        </ul>
    </header>
    
  </div>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  computed: {
    // ...mapMutations([])
  },
  name: "Navigation",
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    openNav() {
      this.$refs.navlinks.style.display = this.$refs.navlinks.style.display !== "block"?"block":"none";
      // this.$refs.navlinks.style.display = "none";
    },
    closeNav() {
      console.log("shrinking");
      this.$refs.navlinks.style.display = "none";
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:700&display=swap');

*{
  font-family: 'Ubuntu', sans-serif;
}
#logo{
  margin: 0;
}
#logo h2 {
  float: right;
  color: white;
}
header#desktop {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 20px; 
  border-bottom-right-radius: 20px;
  box-sizing: border-box;
}

header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
header ul li {
  display: inline-block;
  padding: 12px 14px;
  text-decoration: none;
  color: brown;
}
header ul li a:hover {
  color: #fff;
}
header ul li a {
  color: #aaa;
  font-size: 1.3em;
  font-weight: bold;
  text-decoration: none;
}
#mobile {
  display: none;
}

header {
  margin: 0;
  padding: 20px;
  background-color: black;
  height: auto;
  text-align: left;
  z-index: 5;
  position: fixed;
  top:0;
}

button#navbtn {
  height: 60px;
  width: 60px;
  border: 0;
  background: url("../assets/menu.svg") no-repeat center;
  color: #fff;
}
header ul li a.router-link-exact-active {
  color: #fff;
}


@media only screen and (max-width: 500px) {
  header#mobile {
    display: block;
    position:fixed;
    background-color: black;
    box-shadow: 0 1px 10px #ccc;
    width: 100%;
    min-height: 80px;
    box-sizing: border-box;
    padding: 10px;
  }
  header#mobile button {
    display: table-cell;
    vertical-align: middle;
  }
  header#mobile ul {
    display: none;
  }
  header#mobile ul li {
    display: block;
  }
  header#desktop {
    display: none;
  }
}
</style>



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
          <router-link to="/invest">Invest</router-link>
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
        <li>
          <router-link @click="openNav" to="/">Home</router-link>
        </li>
        <li>
          <router-link @click="openNav" to="/properties">Properties</router-link>
        </li>
        <li>
          <router-link @click="openNav" to="/invest">Invest</router-link>
        </li>
        <li>
          <router-link @click="openNav" to="/about">About</router-link>
        </li>
        <li>
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
    }
  }
};
</script>


<style scoped>

#logo h2{
  float: right;
  color: white;
}
header#desktop {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 20px; 
  border-bottom-right-radius: 20px;
}
header ul {
  list-style-type: none;
}
header ul li {
  display: inline-block;
  padding: 12px 14px;
  text-decoration: none;
  color: brown;
}
header ul li a {
  color: #aaa;
  font-size: 1.3em;
  text-decoration: none
}
#mobile {
  display: none;
}

header {
  margin: 0;
  padding: 30px;
  /* background-color: rgba(0, 0, 0, 0.61); */
  background-color: black;
  height: auto;
  /* box-shadow: 0 1px 10px #ccc; */
  text-align: left;
  margin-bottom: 50px;
  z-index: 5;
  position: fixed;
  top:0;
}

button#navbtn {
  height: 60px;
  width: 60px;
  border: 0;
  background: url("../assets/menu.svg") no-repeat center;
  color: black;
}
header ul li a.router-link-exact-active {
  text-shadow: 0 0 2px;
}


@media only screen and (max-width: 500px) {
  header#mobile {
    display: block;
    position:fixed;
    background-color: black;
    box-shadow: 0 1px 10px #999;
    width: 100%;
    min-height: 80px;
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



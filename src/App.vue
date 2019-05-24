<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      searchtext: ""
    };
  },
  methods: {
    getSearchResults() {
      this.searchtext = this.searchtext.replace(";", "");
    }
  }
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Fira+Sans");
@import url("./assets/animate.css");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css")

* {
  font-family: "Fira Sans", sans-serif;
  box-sizing: border-box;
  outline-width: 0;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header ul {
  list-style-type: none;
}
header ul li {
  display: inline-block;
  padding: 12px 14px;
}

/* @media only screen and (max-width: 768px) {
  header ul li{
    display: block;
  }
} */
</style>

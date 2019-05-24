<template>
  <div class="home">
    <div id ="sliderhld">
    <carousel perPage="1" autoplay="true">
      <slide>
        <div class="slidr" id="one">
          <h2 class="call">Now Selling:</h2>
          <h1 class="ad-title">Serviced Plots of Lands</h1>
          <h4 class="location">Apo Dutse, Behind Living Faith Chapel, Abuja.</h4>
          <div class="price">N25,000/m&sup2;</div>
        </div>
      </slide>
      <slide>
        <div class="slidr" id="two">
          <h2 class="call">Now Selling:</h2>
          <h1 class="ad-title">Serviced Plots of Lands</h1>
          <h4 class="location">Apo Dutse, Behind Living Faith Chapel, Abuja.</h4>
          <h1 class="price">N25,000/square meter</h1>
        </div>
      </slide>
      <slide>
        <div class="slidr" id="three">
          <h2 class="call">Now Selling:</h2>
          <h1 class="ad-title">Serviced Plots of Lands</h1>
          <h4 class="location">Apo Dutse, Behind Living Faith Chapel, Abuja.</h4>
          <h1 class="price">N25,000/square meter</h1>
        </div>
      </slide>
       <slide>
        <div class="slidr" id="four">
          <h2 class="call">Now Selling:</h2>
          <h1 class="ad-title">Serviced Plots of Lands</h1>
          <h4 class="location">Apo Dutse, Behind Living Faith Chapel, Abuja.</h4>
          <h1 class="price">N25,000/square meter</h1>
        </div>
      </slide>
    </carousel>
    <div id="scrollicon"></div>
  </div>

  <h2>Our Activities</h2>
  <div id="grid2">
    <div>
    <h4>Integrated Consult</h4>
    <p>Research Development, Consultation planning and design execution</p>
    </div>
    <div>
    <h4>Building Construction</h4>
    <p>Residential projects, commercial building and hotels, cultural and religious buildings.</p>
    </div>
    <div>
    <h4>Utilities</h4>
    <p>supply installations, waste disposal, infill sites recycling systems incinerating plants.</p>
    </div>
    <div>
      Special Civil Engineering Constructions
    </div>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style scoped>
.home{
  /*margin-top: 80px;*/
}

#welcome{
  font-weight:800;
  font-size:3em;
  color:#2c3e50;
  text-shadow: 0 2px 4px;
}

.slidr{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding-top: 20%
}
.slidr:after{
  filter: blur(2px);
}
.call {
  top: 30%;
  left: 20%;
  color: white;
  font-size: 3em;
}
.ad-title {
  top: 50%;
  font-weight: bold;
  color: blue;
  text-shadow: 0 0 5px #fff;
  font-size: 3em;
}
.price {
  bottom: 20%;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 3em;
  background-color: #fff;
  padding: 50px;
}
.location:before{
  content: '@';
  font-weight: bold;
  font-size: 2em;
  color: #fff; 
}
#one{
  background: url("../assets/1.jpg") no-repeat center;
  padding: 30%;

}
#two{
  background: url("../assets/2.jpg") no-repeat center; 
}
#three{
  background: url("../assets/2.jpg") no-repeat center;
}
#four{
  background: url("../assets/1.jpg") no-repeat center;
}

#grid2{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

#sliderhld{
  position: relative;
  text-align: center;
}
@keyframes slowmove {
  0% {
    bottom: 135px;
    opacity: 0;
  }

  /* 50% {
    bottom: 135px;
    opacity: 0.3;
  } */

  100% {
    bottom: 140px;
    opacity: 1;
  }
}
#scrollicon{
  border: 2px solid grey;
  background-color: white;
  position: absolute;
  width: 20px;
  height: 40px;
  left: 50%;
  border-radius: 30%;
  bottom: 140px;
  animation-name: slowmove;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
  animation-delay:0.5s;
  animation-iteration-count: infinite;
}
@media only screen and (max-width: 640px){
  #grid2 {
    display: grid;
    grid-template-columns: 1fr;
  }
  #grid2 div{
    padding: 40px;
    height: 200px;
  }
  /*#grid2:nth-child(odd){*/
    /*background-color: #ccc;*/
  /*}*/
  #grid2 div:nth-child(even){
    background-color: #ccc;
  }

  .call {
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
  font-size: 1.6em;
}
.ad-title {
  position: absolute;
  top: 40%;
  left: 10%;
  font-weight: bold;
  color: blue;
  text-shadow: 0 0 5px #fff;
  font-size: 2.6em;
}
.price {
  position: absolute;
  top: auto;
  left: 15%;
  bottom: 20%;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 2.2em;
  background-color: #fff;
  vertical-align: 0;
  padding: 20px;
}




}

</style>


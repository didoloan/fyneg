<template>
  <div class="home">
    <div id ="sliderhld">
    <!-- <carousel perPage="1" autoplay="true">
      <slide> -->
        <div class="slidr" id="two">
          <h1 class="call">Now Selling:</h1>
          <h1 class="ad-title">Serviced Plots of Lands</h1>
          <button class="price">Learn more</button>
        </div>
      <!-- </slide>
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
    </carousel> -->
    <div id="scrollicon"></div>
  </div>
  <div class="mission">
    <h1>Mission and Vision</h1>
    <div class="mandv">
      <h2>Our Mission</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis ea autem eum architecto earum vitae animi explicabo, quasi repellendus itaque ducimus sapiente, debitis mollitia eveniet, voluptatibus facilis voluptatum ipsa?</p>
    </div>
    <div class="mandv">
      <h2>Our Vision</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda soluta odio tenetur tempora sunt, rerum voluptate quas quos nisi unde.</p>
    </div>
  </div>

  <h1>Our Activities</h1>
  <div id="grid2">
    <div class="mandv">
    <h2>Integrated Consult</h2>
    <p>Research Development, Consultation planning and design execution</p>
    </div>
    <div class="mandv">
    <h2>Building Construction</h2>
    <p>Residential projects, commercial building and hotels, cultural and religious buildings.</p>
    </div>
    <div class="mandv">
    <h2>Utilities</h2>
    <p>Supply installations, waste disposal, infill sites recycling systems incinerating plants.</p>
    </div>
    <div class="mandv">
      <h2>Special Civil Engineering Constructions</h2>
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
*{
  box-sizing: border-box;
}
slide{
  width:20%;
}
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
  padding-top: 160px;
  box-sizing: border-box;
  padding-left: 10%;
  padding-right: 10%;

}
.slidr:after{
  filter: blur(2px);

}
.call {
  border-radius: 12px 12px 0 0;
  top: 30%;
  left: 20%;
  color: white;
  font-size: 3em;
  font-weight: 600;
  padding: 12px;
  margin-bottom: 0;
  background-color: rgba(24, 6, 6, 0.445);
}
.ad-title {
  margin:0;
  background-color: rgba(24, 6, 6, 0.445);
  border-radius: 0 0 12px 12px;
  padding: 20px;
  padding-top: 0;
  top: 50%;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 5px #fff;
  font-size: 3em;
}
.mission {
  background-color: #000;
  color: #fff ;
  padding: 20px;
  /* margin-bottom: 30px; */
}
.mandv p {
  padding-left: 10%;
  padding-right: 10%;
  text-align: justify;
}
.price {
  color: #fff;
  bottom: 20%;
  border-radius: 20px;
  font-weight: bolder;
  font-size: 1em;
  background-color: rgba(0,0,0,0);
  padding: 10px;
  border: 2px solid #fff;
  transition: 0.5s;
}
.price:hover{
  background-color: #fff;
  color: #333;
}
.location:before{
  content: '@';
  font-weight: bold;
  font-size: 2em;
  color: #fff; 
}
#one{
  background: url("../assets/1.jpg") no-repeat center;
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
    bottom: 70px;
    opacity: 0;
  }

  /* 50% {
    bottom: 135px;
    opacity: 0.3;
  } */

  100% {
    bottom: 75px;
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
  bottom: 70px;
  animation-name: slowmove;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
  animation-delay:0.5s;
  animation-iteration-count: infinite;
}
@media only screen and (max-width: 768px){
  #grid2 {
    display: grid;
    grid-template-columns: 1fr;
  }
  .mandv{
    padding: 25px;
    height: auto;
  }
  /*#grid2:nth-child(odd){*/
    /*background-color: #ccc;*/
  /*}*/
  #grid2 div:nth-child(even){
    background-color: #ccc;
  }

   .call {
  /*position: absolute;
  top: 30%;*/
  color: white;
  font-size: 2em;
}
/*
.ad-title {
  position: absolute;
  top: 40%;
  font-weight: bold;
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
  font-size: 1em;
  background-color: #fff;
  vertical-align: 0;
  padding: 10px;
} 
*/



}

</style>


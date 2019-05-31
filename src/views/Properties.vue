<template>
    <div id="properties">
        <h1>Featured Properties</h1>
        <div id="grid3">
            <div class="card" v-for="property in properties">
                <h2 class="price"><span class="naira">N</span>{{formatPrice(property.price)}}</h2>
                <img :src="property.picture" alt="property image" style="width:100%">
                <div class="container">
                    <h4><b>{{property.title}}</b></h4> 
                    <p>{{property.location}}</p> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Input",
    created(){
        this.getProperty()
    },
    data(){
        return{
            properties: [],
            nextProperty: 'https://8a22cf50.ngrok.io/api/property/'
        }
    },
    computed:{
        // ...mapState(['additional'])
    },
    methods: {
        // send(){
        //     // this.$store.commit("add", this.addit)
        // }
        async getProperty(){
            let response = await fetch(this.nextProperty);
            let posts = await response.json(); 
            posts.results.forEach(post => {
                this.properties.push(post)
            })
            console.log(posts);
        },
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>

<style scoped>
#properties {
    padding: 120px 30px 30px 30px;
}

#grid3 {
    padding-top: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  position: relative;
  cursor: pointer;
}
.card img{
    width: 100%;
}
.price {
    position: absolute;
    top: 10%;
    right: 0;
    background-color: #fffc;
    box-shadow: 0 1px 5px #ccc;
    padding: 10px;
}
.naira {
    font-weight: bold;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
@media only screen and (max-width: 768px){
    #grid3 {
        grid-template-columns: 1fr;
    }
}
</style>
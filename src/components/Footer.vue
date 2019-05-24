<template>
<div id="footer">
    <footer>
        <h3>Join to receive updates of news and events</h3>
        <input type="text" name="" placeholder="Enter your email"><button>Join</button>
        
        <div id="grid3">
        <div class="foot-content">
            <h3>Contact</h3>
            <ul>
                <li><p><i class="material-icons"></i>08138754586</p></li>
                <li><p><i class="material-icons"></i>support@gfynegold.com</p></li>
                <li><p><i class="fas fa-map-marker-alt"></i>Apo District Abuja</p></li>
                
            </ul>
        </div>
        <div class="foot-content">
            <h3>Links</h3>
            <ul>
                <li>Home</li>
                <li>Properties</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
        <p>Copyright&copy; Fynegold Properties Ltd.</p>
    </footer>
</div>
    
</template>

<script>

export default {
    computed: {
        // ...mapMutations([])
    },
    name: "Footer",
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

#footer{
    background-color: black;
}
footer {
    padding-top: 40px;
    padding-bottom: 40px;
}
footer > h3 {
    color: blue;
    padding-left: 20px;
    padding-right: 20px;
}
footer input {
    text-indent: 12px; 
    font-size: 1.3em;
    border: 0;
    background-color: #999;
    border-radius: 12px 0 0 12px;
    height: 60px;
    width: 300px;
}
footer button {
    background-color: #9ccc65;
    color: white;
    border: 0;
    border-radius: 0 12px 12px 0;
    height: 60px;
    width: 100px;
    font-weight: bold;
    font-size: 1.3em;
}
#grid3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    /*border-top: 2px solid;*/
    padding: 30px;
}

.foot-content{
    font-size: 1.2em;
    text-align: left;
}
.footeritem {
    text-align: left;
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
ul li{
    margin-top: 10px;
    font-family: "Fira Sans", sans-serif;
    color: white;
}
@media only screen and (max-width: 640px) {
    #grid3 {
        display: grid;
        grid-template-columns: 1fr;
    }

    footer input {
    text-indent: 12px; 
    font-size: 1.3em;
    border: 0;
    background-color: #999;
    border-radius: 12px 0 0 12px;
    height: 60px;
    width: 70%;
    }
    footer button {
        border: 0;
        border-radius: 0 12px 12px 0;
        height: 60px;
        width: 20%;
        /*font-weight: bold;*/
        font-size: 1.3em;
    }
}
</style>



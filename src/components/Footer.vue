<template>
<div id="footer">
    <footer>
        <h3>Join to receive updates of news and events</h3>
        <input type="text" name="" placeholder="Enter your email"><button>Join</button>
        
        <div id="grid3">
        <div class="foot-content">
            <h3>Contact</h3>
            <ul>
                <li>08138754586</li>
                <li>support@gfynegold.com</li>
                <li>Apo District Abuja</li>
                
            </ul>
        </div>
        <div class="foot-content">
            <h3>Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/property">Properties</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        </div>
        <p>&copy; Fynegold Properties Ltd. All Rights Reserved.</p>
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
footer p {
    /* color: #fff; */
}
footer input {
    text-indent: 12px; 
    font-size: 1.3em;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 12px 0 0 12px;
    height: 60px;
    width: 300px;
    transition: 0.5s;
    box-sizing: border-box;
}
footer input:focus {
    background-color: #fff;
}
footer button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 2px solid #fff;
    border-left:0;
    border-radius: 0 12px 12px 0;
    height: 60px;
    width: 100px;
    font-weight: bold;
    font-size: 1.3em;
}
footer button:hover {
    background-color: #2b4c06;
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
.foot-content h3{
    text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff;
    -webkit-font-smoothing: antialiased;
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

ul li a{
    text-decoration: none;
    color: #fff;
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



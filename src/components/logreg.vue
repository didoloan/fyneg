<template>
<div id="logreg">
    <form action="">
        <label for="">Email: </label>
        <input placeholder="E-mail" type="text" v-model="email">
        <label for="">Password: </label>
        <input placeholder="Password" type="text" v-model="password">
        <input type="submit" value="Login">
    </form>
</div>
    
</template>

<script>
import {mapMutations} from "vuex"

export default {
    computed: {
        ...mapMutations([
            "login"
        ])
    },
    name: "logreg",
    data() {
        return {
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
#logreg {
    display: block;
    width: 300px;
    height: 100vh;
    top: 0;
    left:0;
    background-color: rgba(0, 0, 0, 0.2);
}

form {
    width: auto;
    text-align: center;
    display: inline;
    padding: 40% 40%;
}
form input {
    box-shadow: 0 0 1px #0F0D17;
    border: 2px solid #0F0D17;
    text-indent: 5px;
    border-radius: 8px;
    margin-bottom: 20px;
    height:30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
}
input[type="submit"] {
    border: 0;
    font-weight: bold;
    width:100%;
    background-color: #11CE44;
    color:#fff;
}

</style>



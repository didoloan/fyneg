<template>
    <div id="input">
        <h1>{{additional}}</h1>
        <form action="" @submit.prevent="send">
            <textarea v-model="addit" name="" id="" cols="35" rows="20"></textarea>
            <input type="submit" value="Submit">
        </form>        
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
    name: "Input",
    data(){
        return{
            addit:""
        }
    },
    computed:{
        ...mapState(['additional'])
    },
    methods: {
        send(){
            this.$store.commit("add", this.addit)
        }
    }
}
</script>
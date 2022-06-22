<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
    setup() {
        const msg = ref("hello")
    
        const song_infos = ref({})

        function log(){
            console.log(msg.value)
        }

        function search() {
            song_infos.value = {id:1, name:"alex"}
        }

        return {msg,song_infos, search}
    },
})



</script>

<template>
    <input type="text" v-model="msg" />

    <button v-on:click="search">search</button>
    <div>
        <p v-for="(key,item) in song_infos" :key = "item">{{key}} {{item}} </p>
    </div>

</template>

<style scoped>

</style>
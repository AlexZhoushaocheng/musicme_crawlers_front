<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import axios from 'axios'

const search_txt = ref("")
const song_infos = ref({})

function search(keyword: MouseEvent) {
  // console.log(search_input.value)

  // axios.get('/search/等一分钟').then((response) => {
  //   console.log(response.data)
  // })
 
  axios({
    // headers: {"Access-Control-Allow-Origin": "*"} ,
    method: 'get',
    url: '/api/search/' + search_txt.value,
    // timeout: 1000,
    responseType: 'json'
  }).then((response) => {
    console.log('hello world')
    console.log(response.data)
    console.log(typeof response.data)
    console.log(response.status)

    if(response.status == 200){
        try{
            song_infos.value = response.data['result']['songs']
        }
        catch(ex){

        }
    }
  })
}

</script>

<template>
    <input type="text" v-model="search_txt" />

    <button v-on:click="search">search</button>
    <div>
        <div v-for="(key,item) in song_infos" :key = "item">{{key['name']}} {{key['ar'][0]['name']}} <button>下载</button></div>
        
    </div>

</template>

<style scoped>

</style>
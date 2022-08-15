<script setup lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { ref } from 'vue'
import axios from 'axios'
import SongList from './SongList.vue'

const loading = ref(false)

let current_keyword = ref('')
const song_infos = ref({})

// 
const ctx = getCurrentInstance()?.appContext.config.globalProperties;

function on_search(key: string) {
    if (loading.value) return

    // 关键字不可以为空
    key = key.trim()
    if (key.length == 0) return

    loading.value = true  // 改变搜索按钮忙碌
    axios({
        method: 'get',
        url: '/api/search/' + key,
        timeout: 10000,
        responseType: 'json'
    }).then((response) => {
        if (response.status == 200) {
            try {
                song_infos.value = response.data['result']['songs']
                console.log(song_infos.value)
            }
            catch (ex) {
                ctx?.$notification.error('数据错误');
                console.log(ex)
            }
        }
    }).catch((ex) => {
        ctx?.$notification.error(ex.message);
        console.log(ex)
    }).finally(() => { loading.value = false })
}

// 回车键按下时搜索
function on_press_enter() {
    if (loading.value) return

    on_search(current_keyword.value)
}

</script>

<template>
    <a-input-search :style="{ width: '320px' }" placeholder="输入歌曲名" :loading="loading" @search="on_search"
        @press-enter="on_press_enter" v-model="current_keyword" :max-length="18"></a-input-search>

    <div id="song_list">
        <SongList :songs="song_infos"></SongList>
    </div>
</template>

<style>
#song_list{
    margin-top: 30px;
}
</style>
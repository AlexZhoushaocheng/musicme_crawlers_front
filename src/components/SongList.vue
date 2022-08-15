<script setup lang="ts">
import { defineComponent } from 'vue'
import { IconPlus, IconSave, IconDownload } from '@arco-design/web-vue/es/icon';
import axios from 'axios'

defineProps<{ songs: {} }>()

function collect_song(song_id: string, name: string) {
    console.log(song_id, name)
    axios({
        method: 'get',
        url: '/api/save/' + song_id,
        // timeout: 1000,
        responseType: 'text'
    }).then((response) => {
        console.log(response.data)
        console.log(typeof response.data)
        console.log(response.status)

        if (response.status == 200) {
            alert(name + " 收藏成功")
        } else {
            alert(name + " 收藏失败")
        }
    }).catch((ex) => { })
}
</script>

<template>
    <div id="root-div">
        <a-row id="header-row" class="row" justify="center" :gutter=5>
            <a-col :span="4">
                <div>名称</div>
            </a-col>
            <a-col :span="4">
                <div>演唱</div>
            </a-col>
            <a-col :span="4">
                <div>专辑</div>
            </a-col>
        </a-row>

        <a-row v-for="(key, item) in songs" :key="item" class="grid-row row" justify="center" :gutter=5>
            <a-col :span="4">
                <div class="first_col">{{ key['name'] }}</div>
            </a-col>
            <a-col :span="4">
                <div>{{ key['ar'][0]['name'] }}</div>
            </a-col>
            <a-col :span="4">
                <div>{{ key['al']['name'] }}</div>
            </a-col>
            <a-col :span="4">
                <div>
                    <a-button type="primary" size="small" html-type="a" :download="key['name'] + '.m4a'"
                        :href="'/api/download/' + key['id']">
                        <template #icon>
                            <icon-download />
                        </template>
                    </a-button>
                    <a-button type="primary" size="small" @click="collect_song(key['id'], key['name'])">
                        <template #icon>
                            <icon-save />
                        </template>
                    </a-button>
                </div>
            </a-col>
        </a-row>
    </div>
</template>


<style scoped>
.first_col {
    text-align: left;
}

.row {
    height: 30px;
}

/* .grid-row {
    color: aqua;
} */
</style>
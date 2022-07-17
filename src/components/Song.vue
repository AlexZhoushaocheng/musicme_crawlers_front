<script setup lang="ts">
import { defineComponent } from 'vue'


defineProps<{song:Object}>();

const emit_1 = defineEmits<{(e: 'click', num: number): void}>()

</script>

<template>
<p>{{song}}</p>
    <!-- <div>{{song}} <button>download</button></div> -->
</template>
<template>

    <div class="flex">
        <button @click="currentTag = tag,isactive=!isactive" class="button" v-for="tag in tags" :key="tag" :class="{
          'border-blue-500 text-blue-500': tag === currentTag
        }">{{tag}}</button>
      </div>  
</template>

<script setup>
import { computed,ref } from 'vue';

const currentTag = ref('all')
defineProps({
    tags:Array
})
const allTags = computed(()=>{
 
 return ['all', ...new Set(tags)];
 
})

</script>
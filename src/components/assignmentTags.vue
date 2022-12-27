<template>
    <div class="flex gap-2">
        <button @click="currentTag = tag" class="border rounded px-1 py-px text-xs" v-for="tag in tags" :key="tag"
            :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }">{{ tag }}</button>
    </div>
</template>
<script setup>
import { computed,ref } from 'vue';


const currentTag = ref('')
const allTags = computed(()=>{
 
 return ['all', ...new Set(tags.tags)];
 
})
const tags = defineProps({
    tags:Array
})

</script>
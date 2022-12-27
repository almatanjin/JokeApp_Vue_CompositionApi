<template>
    <div v-if="assingments.length">
      <h3 class="font-bold mb-2 px-2"><strong>{{title}}<span>{{assingments.length}}</span></strong></h3>


<!-- 
      <div class="flex">
        <button @click="currentTag = tag,isactive=!isactive" class="button" v-for="tag in tags" :key="tag" :class="{
          'border-blue-500 text-blue-500': tag === currentTag
        }">{{tag}}</button>
      </div> -->

      <assignmentTag :tags="assign.assingments.map(a => a.tag)"/>
      <ul>
        <assignmentVue v-for="assignment in filteredAssingments" :key="assignment"  :assignment="assignment"></assignmentVue>
      </ul>
  </div>
  
  
  
  </template>

<script setup>
import assignmentVue from './assignment.vue';
import { computed,ref } from 'vue';
import assignmentTag from './assignmentTag.vue'

const currentTag = ref ('all')
const isactive = ref (false)
const assign = defineProps ({
    assingments: Array,
    title: String
})


const tags = computed(()=>{
 
  return ['all', ...new Set(assign.assingments.map(a => a.tag))];
  
})
const filteredAssingments = computed(()=>{
  if(currentTag.value === 'all')
  {
    return assign.assingments
  }
  return assign.assingments.filter(a => a.tag === currentTag.value)
})


</script>
<style>
span{
  margin-left: 5px;
}
.flex{
  display: flex;
  gap:3px;
  justify-content: center;
}
.button{

  padding: 2px;
  font-size: small;
  background-color: rgba(255, 255, 255, 0.473);
  color: rgb(44, 41, 41);
  font-weight: 100px;
  border: 1px solid rgb(51, 48, 48);
  margin-bottom: 10px
}

.active{
  color: blue;
}
.inactive{
  color: black;
}
</style>
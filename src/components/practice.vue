<template>
  <div v-if="notcompleted.length">
    <h3><strong>In process</strong></h3>
    <p v-for="i in notcompleted" :key="i" >
        <label >{{i.name}}</label>
        <input type="checkbox" v-model="i.complete" />
    </p>
</div>
<div v-if="completed.length">
    <h3><strong>Completed</strong></h3>
    <p v-for="i in completed" :key="i" >
        <label >{{i.name}}</label>
        <input type="checkbox" v-model="i.complete" />
    </p>
</div>



</template>
<script setup>
import { reactive,ref } from 'vue';
import { computed } from 'vue';
import PostApiVue from './PostApi.vue';

const assignment = reactive([
    {name:'finished project',complete : false},
    {name:'Read Chapter 4',complete : false},
    {name:'Turn in HomeWork',complete : false},



])
const active = ref(true)
const completed = computed(()=>{
    return assignment.filter(a=>a.complete)
})
const notcompleted = computed(()=>{
    return assignment.filter(a=>!a.complete)

})
function toggle(){
    
    active.value = ! active.value
}

</script>
<style>
.text-green{
    color: green;
}
.text-red{
    color:brown
}

</style>
<template>
    <section class="space-y-6">

        <assignmentListVue :assingments="notcompleted" title="In Progress" />
        <assignmentListVue :assingments="completed" title="Completed" />
        <assignmentCreate @add="add"/> 
        <!-- just template -->
    </section>


</template>
<script setup>
import { reactive, ref } from 'vue';
import { computed } from 'vue';
import assignmentListVue from './assignmentList.vue';
import assignmentCreate from './assignmentCreate.vue';
const newassignment = ref('')
const assignment = reactive([
    { name: 'finished project', complete: false , tag: 'math'},
    { name: 'Read Chapter 4', complete: false , tag:'science' },
    { name: 'Turn in HomeWork', complete: false, tag:'social science' },



])
const active = ref(true)
const completed = computed(() => {
    return assignment.filter(a => a.complete)
})
const notcompleted = computed(() => {
    return assignment.filter(a => !a.complete)

})

// const filters = computed(() => {
//     completed = assignment.filter(a => a.complete),
//         notcompleted = assignment.filter(a => !a.complete)

// })

function add(name){
    console.log(name)
    if(name.length)
   {
    assignment.push({
        name:name,
        complete:false
    })
   }
    newassignment.value=""
}

</script>
<style>
.text-green {
    color: green;
}

.text-red {
    color: brown
}
.b{
    background-color: black;
    padding: 3px;
    border-left: 3px;
}
.d input{
    color: black;
    padding: 2px;
    border-left: 2px;
}
</style>
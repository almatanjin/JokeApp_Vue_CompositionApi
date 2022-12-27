<template>

  <div>
        <label >{{assignment.name}}
           
        <input type="checkbox" v-model="assignment.complete" />
    </label>
    </div>
    
</template>

<script setup>

defineProps({
    assignment:Object
})

</script>
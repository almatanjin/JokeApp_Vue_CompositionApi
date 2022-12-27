<template>
    <form @submit.prevent="add">
        <div class="d">

            <input placeholder="New Assignment...." class="text-black" v-model="newassignment"/>
           
            <button type="submit" class="b" >Add</button>
        </div>
    </form>

</template>
<script setup>

import { ref } from 'vue';


const newassignment = ref('')
const emit =  defineEmits(['add'])
function add(){
    emit('add',newassignment.value)
   
    newassignment.value=""
}

</script>




<!-- <script >
option api emit 
export default{
    data(){
    return {
        newassignment:""
    }
},

methods:{
    add() {
        this.$emit('add',this.newassignment)
        this.newassignment=""
    }
}
}
</script> -->
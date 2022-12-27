<template>

</template>
<script>


import axios from 'axios';
import { ref } from 'vue';
import { onMounted } from 'vue';
export default {
  setup() {


    

    const result = ref(null)
    //   axios.get('https://reqres.in/api/users?page=1').then(data => result.value=data);

    //   console.log(result)


    onMounted(async () => {
      result.value = await axios.get('https://reqres.in/api/users?page=1')
    })
    console.log(result)


    
  }
}


</script>
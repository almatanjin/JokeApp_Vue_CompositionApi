<template>
  <div class="home">
    <h1>This is Home page</h1>
    <p v-for="item in list" :key="item" >
       {{item.id}} -- {{item.email}} -- {{item.first_name}} --{{item.last_name}}
       <img :src="item.avatar" />
       

    </p>
  </div>
</template>

<script>
// @ is an alias to /src



// import { onMounted } from 'vue';
// import {axios} from 'axios';


import axios from 'axios';


export default {
  name: 'HomeView',

  data(){
    return{
      list:[]
    }
  },

  async mounted(){
    let result = await axios.get("https://reqres.in/api/users?page=1")
    this.list = result.data.data;
    
  }
  // components: {
    
  // }
}


// // const list=[]

// async mounted(){
//   let result = await axios.get("https://reqres.in/api/users?page=1");
//   console.log("api data", result);
// }
</script>

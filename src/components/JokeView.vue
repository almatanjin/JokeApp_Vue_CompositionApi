<template>

<button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownDivider" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
<h1>Joke App</h1>

<button @click="showJoke()">Show Jokes</button>
<br />
<button @click="hi()">Hi</button>
<div v-if="joke">
    <p id="joke">{{joke}}</p>
</div>

</template>

<script setup>


import axios from 'axios';
import JSConfetti from 'js-confetti'


import { ref } from 'vue';

// const jsConfetti = new JSConfetti();



const joke = ref('')
let config = {
    headers:{
        'Accept': 'application/json'
    }
}
function hi(){
    alertify.set('notifier','position', 'top-center');
 alertify.success('Ready' + alertify.get('notifier','position'));
    // alertify.alert('Ready!');
}

async function showJoke(){
    
    


    
    joke.value = (await axios.get('https://icanhazdadjoke.com',config)).data.joke;
    const jsConfetti = new JSConfetti(joke.value);
    jsConfetti.addConfetti({
        emojis:['😂'],
        emojiSize: 40,
    })
    
}



// export default {
//     name: 'JokeView',
    
//     data(){
//         return{
//             joke:""
//         }
//     },
//     methods:{
//         async showJoke(){
//             let config = {
//                 headers:{
//                     'Accept': 'application/json'
//                 }
//             }
//             const joke = await axios.get('https://icanhazdadjoke.com',config);
//             this.joke = joke.data.joke
            
//         }
//     }

// }



</script>
<style>
#joke{
    font-family: 'Merienda';font-size: 22px;
    font-weight: bold;
    color: chocolate;
}
button{
    color: aliceblue;
    border: none;
    padding: 8px;
    background-color: orange;
    border-radius: 3px;
    font-weight: bold;
}

</style>
<template>
<h1>Joke App</h1>

<button @click="showJoke">Show Jokes</button>
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

async function showJoke(){
    
    joke.value = (await axios.get('https://icanhazdadjoke.com',config)).data.joke;
    const jsConfetti = new JSConfetti(joke.value);
    jsConfetti.addConfetti({
        emojis:['😂'],
        emojiSize: 40,
    })
}


//option Api code 


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
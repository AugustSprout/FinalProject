<template>
    <div class="api">
        <h1>Котики</h1>
        <div v-if="isLoad">Загрузка данных...</div>
        <div v-else>
            <div>
                <button @click="this.ChangeCat()">Поменять котика</button>
                <img class="img" v-bind:src="imageUrl"  alt="cat">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: `ApiPage`,
        data(){
            return{
                imageUrl: ``,
                isLoad: true,
            }
        },
        methods:{
            ChangeCat(){
                const URL = ' https://api.thecatapi.com/v1/images/search';
                const options = {
                    method: 'GET',
                };
                fetch(URL, options)
                .then((res)=> res.json())
                .then((res) => {
                    this.imageUrl = res[0].url
                    this.isLoad = false
                })
            }
        },
        mounted(){
            this.ChangeCat()
            }
    }
</script>
<style>
    .api{
        display: grid;
        flex-direction: column;
        justify-content: center
    }
    button{
        background: #1C1C1C;
        color: #dbd7d2;
        border: 3px solid black;
    }
    button:hover{
        background: black;
    }
    .img{
        display: block;
        margin-left: 10%;
        margin-top: 5vh;
        max-width: 80%;
        max-height: 80vh;
        min-width: 40%;
        min-height: 40vh;
    }
</style>
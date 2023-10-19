<template>
    <div>
        <h1>Котики</h1>
        <div v-if="isLoad">Загрузка данных...</div>
        <div v-else>
            <div>
                <button @click="this.ChangeCat()">Поменять котика</button>
                <img v-bind:src="imageUrl"  alt="cat">
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
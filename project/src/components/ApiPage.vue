<template>
    <div>
        <h1>Команды</h1>
        <div v-if="isLoad">Загрузка данных...</div>
        <div v-else>
            <div v-for="(el) in teamData" :key="el.id">
                {{ el.id }}. {{ el.abbreviation }} {{ el.city }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: `ApiPage`,
        data(){
            return{
                teamData: [],
                isLoad: true,
            }
        },
        mounted(){
            const url = 'https://free-nba.p.rapidapi.com/players/%7Bid%7D';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4eefd457bamsh81004e396689e41p156c2fjsnc795ae8aafe6',
                    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
                }
                };
                fetch(url, options)
                .then((res)=> res.json())
                .then((res) => {
                    this.teamData = res.data
                    this.isLoad = false
                })
            }
    }
</script>
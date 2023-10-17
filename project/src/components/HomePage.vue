<template>
    <main>
        <hello></hello>
        <h1>Главная страница</h1>
        <h2>Привет, {{ userName }}</h2>
    </main>
</template>

<script>
    export default {
        name: `HomePage`,
        data(){
            return{
                userName: ``
            }
        },
        created(){
                if(!localStorage.getItem(`userName`)){
                    this.userName = `путник`
                }
                else{
                    this.userName = localStorage.getItem(`userName`)
                }
                
            }
    }
</script>
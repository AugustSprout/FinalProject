<template>
    <main>
        <h1>Главная страница</h1>
        <h2 >Привет, {{ userName }}</h2>
    </main>
</template>

<script>
    export default {
        name: `HomePage`,
        data(){
            return{
                userName: localStorage.getItem(`userName`)
            }
        }
    }
</script>
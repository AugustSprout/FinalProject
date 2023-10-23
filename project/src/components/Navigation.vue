<template>
    <div class="nav">
        <button @click="$router.push(`/`)">Главная</button>
        <button @click="$router.push(`/im`)">Чатик</button>
        <button @click="$router.push(`/api`)">Котики</button>
        <button @click="$router.push(`/profile`)">Профиль</button>
    </div>
</template>

<script>
    export default {
        name: `Navigation`
    }
</script>
<style>
    .nav{
        display: flex;
        justify-content: space-around;
        
    }
    .nav button{
        background: #1C1C1C;
        color: #dbd7d2;
        border: 3px solid black
    }
    .nav button:hover{
        background: black;
    }
</style>
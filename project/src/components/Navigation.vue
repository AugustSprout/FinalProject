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
        align-items: center;
        margin-top: 3%;
        
    }
</style>
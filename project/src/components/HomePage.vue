<template>
    <main>
        <h1>Главная страница</h1>
        <h2 v-if="isAuth">Привет, {{ userName }}</h2>
        <h2 v-else>Привет, путник</h2>
    </main>
</template>

<script>
    export default {
        name: `HomePage`
    }
</script>
<template>
    <div>
        <nav>
            <router-link to="/">Главная</router-link>
            <router-link to="/im">Чат</router-link>
            <router-link to="/api">Котики</router-link>
            <router-link to="/profile">Профиль</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: `Navigation`
    }
</script>
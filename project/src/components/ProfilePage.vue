<template>
    <h1>Профиль</h1>
    <h2>Логин: {{ userName }} </h2>
    <button @click="logout">Выйти из аккаунта</button>

</template>

<script>
    export default {
        name: `ProfilePage`,
        data(){
            return{
                userName: localStorage.getItem(`userName`),
            }
        },
        methods:{
            logout(){
                localStorage.removeItem(`isAuth`, false)
                localStorage.removeItem(`userName`)
                localStorage.removeItem(`password`)
                this.$router.push({
                        name: `HomePage`,
                        query: {userName: this.userName}
                    })
            }
        }
    }
</script>
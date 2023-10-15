<template>
    <h1>profile</h1>
    <button @click="logout">выйти из аккаунта</button>

</template>

<script>
    export default {
        name: `ProfilePage`,
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
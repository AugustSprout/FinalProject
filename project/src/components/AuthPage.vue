<template>
    <div>
        <h1>Авторизация</h1>
        <label>Введите логин:</label>
        <input v-model="userName" type="text">
        <label>Введите пароль:</label>
        <input v-model="password" type="password">
        <button @click="login">Сохранить</button>
    </div>
</template>

<script>
    export default {
        name: `AuthPage`,
        data(){
            return{
                isAuth: false,
                userName: "",
                password: ``,
            }
        },
        created(){
            if(localStorage.getItem(`isAuth`)){
                this.isAuth = true
            }
        },
        methods:{
            login(){
                if(this.userName != `` && this.password != ``){
                    console.log(this.userName)
                    this.isAuth = true
                    localStorage.setItem(`isAuth`, true)
                    localStorage.setItem(`userName`, this.userName)
                    localStorage.setItem(`password`, this.password)

                    this.$router.push({
                        name: `ProfilePage`,
                        query: {userName: this.userName}
                    })
                }
                else{
                    alert(`Введите логин и пароль!`)
                }
            }
        }
    }
</script>

<style>
    input{
        margin-top: 1vh;
        background: #1C1C1C;
        color: #dbd7d2;
        border: black solid 3px;
        margin-left: 1vh;
    }
    label{
        margin-left: 1vh;
    }
    button{
        margin-left: 1vh;
    }
</style>
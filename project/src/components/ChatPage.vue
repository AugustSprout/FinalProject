<template>
    <main>
        <div class="chat">
            <h1>Чатик</h1>
            <div class="text" v-for="message in messages" :key="message.id">
                {{message.user}}: {{ message.text }}
            </div>
            <div v-show="emptyMsg">Полковнику никто не пишет...</div>
            <input placeholder="Введите сообщение" v-model="newMessage" type="text">
            <button @click="sendMessage">Отправить</button>
            <button @click="delMessage">Удалить</button>
        </div>
        
    </main>
</template>

<script>
    export default {
        name: `ChatPage`,
        data(){
            return {
                messages: [],
                newMessage: ``,
                emptyMsg: true,
                userName: localStorage.getItem(`userName`),
            
            }
        },
        computed(){
            localStorage.setItem(`userName`, this.$route.query.userName)
        },
        methods:{
            sendMessage(){
                if(this.newMessage !== ``){
                    this.emptyMsg = false
                    
                    this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.userName})
                    this.saveChatRecords()
                    console.log(this.messages)
                    this.newMessage = ``
                }
                else{
                    alert(`Введите сообщение!`)
                }
            },
            saveChatRecords(){
                const records = this.messages
                console.log(records)
                localStorage.setItem(`messages_${this.userName}`, JSON.stringify(records))
            },
            delMessage(){
                this.messages = []
                localStorage.removeItem(`messages_${this.userName}`, JSON.stringify(this.message))
                this.emptyMsg = true
            },
            loadChatRecords(){
                const records = JSON.parse(localStorage.getItem(`messages_${this.userName}`))
                if(records){
                    this.messages = records,
                    this.emptyMsg = false
                    console.log(`ок`)
                }
                else{
                    console.log(`не ок`)
                }
            }
        },
        created(){
            this.loadChatRecords()
        }
    }
</script>

<style>
    .chat{
        color: #dbd7d2;
    }
    .chat input {
        margin-top: 3vh;
        background: #1C1C1C;
        color: #dbd7d2;
        border: black solid 3px;
    }
    .chat button{
        background: #1C1C1C;
        color: #dbd7d2;
        border: 3px solid black;
        margin-left: 1%;
        
    }
    .chat button:hover{
        background: black;
    }
</style>
class ChatRoom {
    logMessage(user,message){
        const time = new Date();
        const sender = user.getName();
        console.log(`${time} [${sender}]: ${message}`);
    }
}

class User {
    constructor (name, chatroom){
        this.name = name;
        this.chatroom = chatroom;
    }
    getName(){
        return this.name;
    }
    send(message){
        this.chatroom.logMessage(this,message)
    }
}

const chatRoom = new ChatRoom();

const Tom = new User("Tom",chatRoom);
const Bom = new User("Bom",chatRoom);

Tom.send("Hi! Bom!");
Bom.send("Hi! Tom!")
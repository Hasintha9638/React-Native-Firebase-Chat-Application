import firebase from 'firebase';

class Fire{
    constructor(){
        this.init()
        this.checkAuth()
    }

    init=()=>{
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyDDzupPAUfdeip8H28ShDwv0n6D4jUluZg",
                authDomain: "chat-app-b84be.firebaseapp.com",
                projectId: "chat-app-b84be",
                storageBucket: "chat-app-b84be.appspot.com",
                messagingSenderId: "469576097208",
                appId: "1:469576097208:web:5024fba7040ee091e5034d",
                measurementId: "G-73EVEMXBS3"
            });
        }
    };

    checkAuth=()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages =>{
        messages.forEach(item => {
            const message={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }
            this.db.push(message);
        });
    };

    parse= message =>{
        const {user,text,timestamp} =message.val()
        const {key:_id}=message
        const createdAt=new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get=callback=>{
        this.db.on('child_added',snapshot=>callback(this.parse(snapshot)));
    };
    off(){
        this.db.off();
    }

    get db(){
        return firebase.database().ref("messages");
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
}
export default new Fire();
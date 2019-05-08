import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/database"

const config = {
    apiKey: "AIzaSyAhZ2PGk3gYqNXMIxRTKOVN7y3zNeiLJ1Y",
    authDomain: "ppcb-30001.firebaseapp.com",
    databaseURL: "https://ppcb-30001.firebaseio.com",
    projectId: "ppcb-30001",
    storageBucket: "ppcb-30001.appspot.com",
    messagingSenderId: "995991587181"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
//firebase.firestore().settings({timestampsInSnapshots: true});
export default firebase;
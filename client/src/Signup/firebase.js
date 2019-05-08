import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAhZ2PGk3gYqNXMIxRTKOVN7y3zNeiLJ1Y",
    authDomain: "ppcb-30001.firebaseapp.com",
    databaseURL: "https://ppcb-30001.firebaseio.com",
    projectId: "ppcb-30001",
    storageBucket: "ppcb-30001.appspot.com",
    messagingSenderId: "995991587181"
};
firebase.initializeApp(config);
export default firebase;
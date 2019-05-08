import firebase from '../firebase'

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        //const firebaseAuth = firebase;

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        }); 
        
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const fireAuth = firebase.firestore();
        const firebaseReal = firebase.database();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firebaseReal.ref('User').child(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                address: newUser.address,
                email: newUser.email,
                initials: newUser.firstName[0] + newUser.lastName[0]
        })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}
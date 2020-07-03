import firebase from 'firebase/app';
import 'firebase/firestore'; // for DB
import 'firebase/auth'; // for authentication

const config = {
    apiKey: 'AIzaSyBLn2qS_qaCFByFBG9q8X6NhfloTGsCod4',
    authDomain: 'ecommerce-db-5aa0e.firebaseapp.com',
    databaseURL: 'https://ecommerce-db-5aa0e.firebaseio.com',
    projectId: 'ecommerce-db-5aa0e',
    storageBucket: 'ecommerce-db-5aa0e.appspot.com',
    messagingSenderId: '911699653071',
    appId: '1:911699653071:web:4be24cd83cdc69eef022ba'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (snapShot.exists) {
        return userRef;
    }

    console.log('user does not exist in DB - lets save');

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
        console.log('error creating user in DB: ', error.message);
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

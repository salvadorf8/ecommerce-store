import firebase from 'firebase/app';
import 'firebase/firestore'; // for DB
import 'firebase/auth'; // for authentication
// import 'firebase'; // commented because got a google warning message to only import what I'm using (above two lines of code)

const config = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userDocRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log({ userDocRef });

    const userDocSnapshot = await userDocRef.get();
    // console.log('this works: ', userDocSnapshot.id, ' - ', userDocSnapshot.data());

    // const userCollectionRef = firestore.collection('users');
    // const userCollectionSnapshot = await userCollectionRef.get();
    // console.log('is not working: ', { userCollectionSnapshot });
    // console.log('this works: ', { collection: userCollectionSnapshot.docs.map((doc) => doc.data()) });

    if (userDocSnapshot.exists) {
        const accessed = new Date();

        try {
            await userDocRef.update({ accessed });
        } catch (error) {
            console.log('error creating user in DB: ', error.message);
        }

        return userDocRef;
    }

    // if user does not exist, then create a new record and store it
    const { displayName, email } = userAuth;
    additionalData = { ...additionalData, created: new Date() };

    try {
        await userDocRef.set({ displayName, email, ...additionalData });
    } catch (error) {
        console.log('error creating user in DB: ', error.message);
    }

    return userDocRef;
};

// temporary to add data onetime so we dont have to do this manually
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     console.log('objects to add: ', objectsToAdd);

//     const batch = firestore.batch();
//     objectsToAdd.forEach((obj) => {
//         //give me a new document reference  and give me a new ID
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });

//     return await batch.commit();
// };

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((docSnapshot) => {
        const { title, items } = docSnapshot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            routeName2: title.toLowerCase(),
            id: docSnapshot.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

// There is no promised based way to get a snapshot of wheather or not user exist or not
// The only way to do this is to creating a utility checking onsnapshot auth method
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth setup
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// commented because logic was moved into a saga
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

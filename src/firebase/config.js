import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDnacnDId14u4SZP9KeIFoj8Kt8HC8XCRA',
    authDomain: 'up-on-dev.firebaseapp.com',
    databaseURL: 'https://up-on-dev.firebaseio.com',
    projectId: 'up-on-dev',
    storageBucket: 'up-on-dev.appspot.com',
    messagingSenderId: '189831722235',
    appId: '1:189831722235:ios:2ac41b080c6ca508eaac5e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
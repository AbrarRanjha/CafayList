import firebase from 'firebase/compat/app';
import 'firebase/compat/database';



const firebaseConfig = {
    apiKey: "AIzaSyAN93COKjZeNCr29wnOkO4-eNjw7d6MipA",
    authDomain: "cafe-4333b.firebaseapp.com",
    projectId: "cafe-4333b",
    storageBucket: "cafe-4333b.appspot.com",
    messagingSenderId: "355311949739",
    appId: "1:355311949739:web:f102914c6cf338361464ee"
  };
  const fireDb=firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
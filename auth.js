  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC4Nuxjp60MvDhq8JAMGq6Gvq59CQA4t7c",
    authDomain: "nilbite-70fef.firebaseapp.com",
    projectId: "nilbite-70fef",
    storageBucket: "nilbite-70fef.firebasestorage.app",
    messagingSenderId: "227905861248",
    appId: "1:227905861248:web:09d38c26a1867c52a25865"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userEmail = user.email;

            // Check Firestore for
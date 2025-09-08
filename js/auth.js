// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpPbCr4LYJdVBifbtCB2qz6cmKy3ODpRo",
    authDomain: "showroom-a7c05.firebaseapp.com",
    projectId: "showroom-a7c05",
    storageBucket: "showroom-a7c05.appspot.com",
    messagingSenderId: "336029490193",
    appId: "1:336029490193:web:695ffc6b029d46ec5a65b0",
    measurementId: "G-EXJ7PRR3KX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Function to handle login
async function handleLogin(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const token = await userCredential.user.getIdToken();
        localStorage.setItem('authToken', token);
        return { success: true, message: 'Login successful!' };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Function to handle password reset
async function handlePasswordReset(email) {
    try {
        await auth.sendPasswordResetEmail(email);
        return { success: true, message: 'Password reset email sent!' };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Check authentication state
function checkAuthState(callback) {
    auth.onAuthStateChanged((user) => {
        callback(user);
    });
}

// Sign out function
async function signOut() {
    try {
        await auth.signOut();
        localStorage.removeItem('authToken');
        return { success: true, message: 'Signed out successfully!' };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

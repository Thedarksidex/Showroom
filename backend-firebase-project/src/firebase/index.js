const admin = require('firebase-admin');
const path = require('path');
require('dotenv').config();

let firebaseApp = null;

function initializeApp() {
    if (!firebaseApp) {
        const serviceAccount = require('../../service-account.json');

        firebaseApp = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET
        });
    }
    return firebaseApp;
}

module.exports = {
    initializeApp,
    admin,
    getFirestore: () => admin.firestore()
};
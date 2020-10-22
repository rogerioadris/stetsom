importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAPvKFh3NKplqoRFZA3lBlkz7mFdNxD_rs",
    authDomain: "stb-events.firebaseapp.com",
    databaseURL: "https://stb-events.firebaseio.com",
    projectId: "stb-events",
    storageBucket: "stb-events.appspot.com",
    messagingSenderId: "229011201122",
    appId: "1:229011201122:web:bd61292f6cd835ef6ac53b"
});

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
});

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

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

messaging.requestPermission()
    .then(function () {
        console.log('I am in here');

        return messaging.getToken()
            .then(function (currentToken) {
                console.log(currentToken);
            })
            .catch(function (err) {
                console.log('An error occurred while retrieving token. ', err);
                showToken('Error retrieving Instance ID token. ', err);
                setTokenSentToServer(false);
            });

    }).catch(function (err) {
        console.log('Error');
    });

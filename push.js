const webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BE_-jaK0w-YFU2W0HLLElDmQWZ8LX3Pxvs4JTnvD5-6KWs97zJyngWxJEkEEV1cHR0KNH0igCw-Gb0RV89Fs-Ns",
    "privateKey": "JwPZ_-e02anB0AL1TrmfZ_f-0od0DovGXDhrCi5Y3Io"
};
 
 
webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eQFaAF601c8:APA91bGeiBaHUHWtA9hyj-kGuLtYa19sV_fqE8Eal2IQQVUMtdkjYYARn62IiCwwKaaTHEQseDyI6GLBozS23mdk9EujOF3F8qNqGBkAPEHbIsGJMc-SkclVmy4SNQ3FzKADAJYqh52X",
    "keys": {
        "p256dh": "BDTk0IZpwtxyxeGUvFXYqJuTCKWEReX5A1lEUcL+EglDsiiTbtf0EGpOHyO5JpQ+Ew92/+ALQ2TVj2eKDhR/yMU=",
        "auth": "3n+1bRk+daRDHf+E408SDA=="
    }
};
const payload = 'wellcome to wtf';
const options = {
    gcmAPIKey: '481503729274',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);
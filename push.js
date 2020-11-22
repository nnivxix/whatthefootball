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
    "endpoint": "https://fcm.googleapis.com/fcm/send/fh7nTAs-JoI:APA91bHcmroR2j0FwWlkvJfQE01X8GymJrbwkLzZZgeuT2ZUTarGxC2pEkRNhF1tJfdKTLFky5qzAEHEBmDal_z4JM163msLYVTJuHK24TX_HfdElFuDUjM7J3MH_aH_4TMJE5jaFgkY",
    "keys": {
        "p256dh": "BDrVVn5usivOcvh34/is75XRCD9Aet8AgvZtAK/7h4kktlPqYGoaDz+MT27zo2ZZbeZZlo6QvlW6Vc/4OD/MI+8=",
        "auth": "SbOLX6Q6CwDpSwVnwh++Eg=="
    }
};
const payload = 'welcome to wtf';
const options = {
    gcmAPIKey: '481503729274',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);
//wtf-fb 946815075594
//push-nt 481503729274
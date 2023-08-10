const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors({credentials: true, origin: 'https://localhost:5000/api'}));
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const twilioAccountSid = process.env.TWILIOACCOUNTSID;
const twilioAuthToken = process.env.TWILIOAUTHTOKEN;
const twilioApiKey = process.env.TWILIOAPIKEY;
const twilioApiSecret = process.env.TWILIOAPISECRET;

app.get('/api/token-service', (req, res) => {
    const AccessToken = require('twilio').jwt.AccessToken;

    const VideoGrant = AccessToken.VideoGrant;

    const videoGrant = new VideoGrant();

    const { identity } = req.query;


    // create an access token to sign in with Twilio and return to the client
    const token = new AccessToken(
        twilioAccountSid,
        twilioApiKey,
        twilioApiSecret,
        { identity: identity }
    );

    token.addGrant(videoGrant);

    const accessToken = token.toJwt();

    res.send({
        accessToken: accessToken
    })
});

app.get('/api/room-exists', (req, res) => {
    const { roomId } = req.query;

    const client = require('twilio')(twilioAccountSid, twilioAuthToken);

    client.video.rooms(roomId).fetch().then((room) => {
        if (room) {
            res.send({
                roomExists: true,
                room
            });
        } else {
            res.send({
                roomExists: false
            })
        }
    }).catch(err => {
        res.send({
            roomExists: false,
            err
        })
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server started');
    console.log(`Listening to port ${PORT}`)
})
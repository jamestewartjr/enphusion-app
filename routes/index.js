// const twitterAPI = require('twitter')
// const config = require('../config.js')
const express = require('express')
//
const router = express.Router()
// const twitter = new twitterAPI(config)
// // const params = {
// //   screen_name: 'jamestewartjr',
// //   count: 4
// }

const TwitterAPI = require('twitter');

const twitter = new TwitterAPI({
  consumer_key: 'pQWEbb3sDpEpBRTGdbvdr2xTW',
  consumer_secret: 'S4QKL1A1gczjRSFKGngg5vCmhvtpmkfwiixtWUMwofR2Rr81GQ',
  access_token_key: '847174314851876864-7aY7lkXq7kzXtVecpgopFbuSt5gVjbX',
  access_token_secret: 'DNptO6rqMkGeiyCZicdk6CEdAkGD6fxSGphxIk2OY5mTE'
});

const params = {
  screen_name: 'jamestewartjr'
};
// router.get('/', (request, response) => {
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       console.log('tweets', tweets);
//     }
//     console.log('outside', tweets);
//     console.log('response', response);
//     response.json(tweets);
//   });
// })
router.get('/', (request, response) => {
  twitter.get('statuses/user_timeline', params, (error, tweets, twitterResponse) => {
    if (!error) {
      console.log('twitter error', error)
    }
    console.log('my tweets', tweets.text)
    console.log('Twitter tweet response', twitterResponse.text)
    response.json(tweets.text)
  })
})
//
// router.get('/next', (request, response) => {
//   twitter.get('account/verify_credentials', params, (error, tweets, twitterResponse) => {
//     if (error) {
//       console.log('twitter error', error)
//     }
//     response.json(tweets)
//     console.log('my tweets', tweets)
//     console.log('Twitter tweet response', twitterResponse)
//   })
// })
//
//
module.exports = router

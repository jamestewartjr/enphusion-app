const twitterAPI = require('twitter')
const config = require('./config.js')
const express = require('express')

const router = express.Router()
const twitter = new twitterAPI(config)
const params = {
  screen_name: 'jamestewartjr',
}

// router.get('statuses/user_timeline', params, (error) => {
//   if (!error) {
//     console.log(tweets)
//   }
// })

router.get('/', (request, response) => {
  twitter.get('users/lookup', params, (error, tweets, twitterResponse) => {
    if (error) {
      console.log('twitter error', error)
    }
    response.json(tweets)
    console.log('my tweets', tweets)
  })
})

export default router

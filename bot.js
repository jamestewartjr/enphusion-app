const twitterLib = require('twitter')
const config = require('./config.js')

const twitter = new twitterLib(config)

const parama = {screen_name: 'jamestewartjr'}

client.get('statuses/user_timeline', params, (error) => {
  if (!error){
    console.log(tweets)
  }
})

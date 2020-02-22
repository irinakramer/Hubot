'use strict'

// Import the Slack Developer Kit
const WebClient = require("@slack/client").WebClient;

module.exports = (robot) => {
    const web = new WebClient(robot.adapter.options.token);    

    // Responds with day of the week, a quote and an animated gif
    robot.respond(/what is today?/i, (res) => {
        // Get today's day from the Date object
        const d = new Date();
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        res.reply(`Today is ${weekday[d.getDay()]}!`);
        switch(d.getDay()) {
            case 0:
            case 6:
                return res.reply('Better days are coming! They\'re called Saturday and Sunday',
                'https://media.giphy.com/media/lMCRocI1DvLbduqwWu/200w_d.gif');
                break;
            case 1:
                return res.reply('Good morning. Keep calm and pretend it’s not Monday.', 
                    'https://media.giphy.com/media/6D7Y8u6vbOgNy/giphy-downsized.gif');
                break;
            case 2:
                return res.reply('Guess what guys? It\'s only Tuesday!',
                    'https://media.giphy.com/media/5tsjxsQXLl4GcNsd5S/giphy-downsized.gif');
                break;
            case 3:
                return res.reply('Good morning, part of me is thinking "Wow, it\'s Wednesday already", and the other part is thinking "What do you mean it\'s only Wednesday?!"',
                'https://media.giphy.com/media/l41YzNlhKqyJqQZG0/giphy-downsized.gif');
                break;
            case 4:
                return res.reply('Hello Thursday or as I like to say Friday eve!',
                'https://media.giphy.com/media/ce280BjADCmsfgps4t/giphy.gif');
                break;
            case 5:
                return res.reply('TGIF We\'re ready to party!',
                'https://media.giphy.com/media/1APaqOO5JHnWKLc7Bi/giphy-downsized.gif');
                break;
            default:
                return res.reply('Don\'t count the days, make the days count.');
        }
      })

      // Anytime you mention word 'code' you get a response from bot
      robot.hear(/code/i, (res) => {
        res.send('"Talk is cheap. Show me the code" - Linus Torvalds')
      })


    // Test Web API connection
    robot.hear(/test web api/i, function(res) {
        return web.api.test().then(() => {
          return res.send("Your connection to the Slack API is working!");
        })["catch"]((error) => {
          return res.send("Your connection to the Slack API failed :(");
        });
      });

      // Get user list
      robot.respond(/list users/i, function(res){
        return web.users.list().then(value => {
          let members = value['members'];
          let membersList = [];
          for (var i = 0; i < members.length; i++) {
              // Get only non-bot users
              if (!members[i]['is_bot']) {
                membersList.push(members[i]['real_name'])            
              }
          }
          res.reply('All users who are here: ' + membersList.join(', '))  
        })["catch"](function(error) {
          return res.reply("User.list Get method to Slack API failed :(");
        });
      });

      // Arrays of images
      const dilbert = [
          "https://assets.amuniversal.com/b88e99702b4b0138e5d5005056a9545d",
          "https://assets.amuniversal.com/19f40bc0184b0138deea005056a9545d",
          "https://assets.amuniversal.com/e813310009ad0138da33005056a9545d",
          "https://assets.amuniversal.com/57680b9020db0138e21a005056a9545d",
          "https://assets.amuniversal.com/521c60f020db0138e21a005056a9545d",
          "https://assets.amuniversal.com/19f40bc0184b0138deea005056a9545d",
          "https://assets.amuniversal.com/7a21b6b007fb0138d9cd005056a9545d",
          "https://assets.amuniversal.com/7c2789d004020138d860005056a9545d",
          "https://assets.amuniversal.com/7952d02004020138d860005056a9545d"
      ]

      // Send random Dilbert comic to a user specified in (.*) 
      // by adding @FristLast (choose from dropdown)
      robot.hear(/send dilbert to (.*)/i, function(res) {
        const room = res.match[1];
        return robot.messageRoom(room, res.random(dilbert));
      });

      
    // Show a random picture of cute kittens using subreddit json
      robot.hear(/cute kittens/i, (msg) => {
        kittens(msg)
      });

      const kittens = function(msg) {
        return msg.http('https://www.reddit.com/r/Kitten/.json')
        .header('Accept', 'application/json')
        .get()(function(err, response, body) {
            if(err) {
                msg.send("Encontered an error :(")
                return
            } 
            var results;
            results = JSON.parse(body);
            return msg.send((msg.random(results.data.children)).data.url);
        });
    };

}
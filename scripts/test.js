/**
 * Your app must:

Have a message post to Slack based on user input
Do at least 3 different things.
One of the commands must utilize the list of people in the class to send a direct message or reply.
Leverage Hubot
Use at least 1 conditional to change the outcome of a Slackbot.
Bonus
Leverage a for loop to iterate over a collection
Introduce a random component
Include an image in the response in addition to text

// App division of labor:
//Nicholas
  //Day of the week - conditional & image response
  //Hear "It's <dayOfWeek>" return a picture of a puppy.
// Maria
  //Message someone from the class list - list of people
  //Inputs: person from class, message
  //Output: '@' + message
//Irina
  //Leverage for loop to iterate over a collection
 */

 /**
  * Pseudocode:
  * 
  * Hubot tells you what day of the week is today 
  *     - the day is extracted from the Date object
  *         - Hello, today is Monday
  *     - Conditional statement to show a different quote and Gif for each day
  *         - The bot gives you the quote, the Giffy
  * The bot gives you the option to send this message to a team member
  *     - Input type to enter '@name'
  *     - Send button
  *
  */



 
      // Anytime you mention word 'soon' you get a random image
      // From https://github.com/hubot-scripts/hubot-soon/blob/master/soon.coffee
    //   const images = [
    //     "http://i.imgur.com/TVxNL84.png",
    //     "http://i.imgur.com/bFb5qZt.jpg",
    //     "http://i.imgur.com/qNiLQz3.png",
    //     "http://i.imgur.com/8niosvC.gif",
    //     "http://i.imgur.com/qX5jkRi.jpg",
    //     "http://i.imgur.com/Rqe94Xw.jpg",
    //     "http://i.imgur.com/i2leGDn.jpg",
    //     "http://i.imgur.com/QdnGKdY.jpg",
    //     "http://i.imgur.com/bkox94P.jpg",
    //     "http://i.imgur.com/hdG9IOk.jpg",
    //     "http://i.imgur.com/ne6T0UP.png",
    //     "http://i.imgur.com/41vZ1zP.png",
    //     "http://i.imgur.com/yweXMrA.jpg",
    //     "http://i.imgur.com/GcnzEjU.jpg",
    //     "http://i.imgur.com/J0PLa1k.jpg",
    //     "http://i.imgur.com/GHHLFqK.jpg",
    //     "http://i.imgur.com/o25zB5O.jpg",
    //     "http://i.imgur.com/6yyeCBR.jpg",
    //     "http://i.imgur.com/GKSdoAm.png",
    //     "http://i.imgur.com/3L0UQ8A.jpg",
    //     "http://i.imgur.com/7WhKHPh.gif",
    //     "http://i.imgur.com/xZuKr9v.gif",
    //     "http://i.imgur.com/GWSQBxx.jpg",
    //     "http://i.imgur.com/eCvTcTQ.jpg",
    //     "http://i.imgur.com/0ypfizN.jpg",
    //     "http://i.imgur.com/JyaroGd.jpg",
    //     "http://i.imgur.com/xUgmD93.jpg",
    //     "http://i.imgur.com/ftGheRE.jpg",
    //     "http://i.imgur.com/Y4ExtS5.gif",
    //     "http://i.imgur.com/pDXRVjp.jpg",
    //     "http://i.imgur.com/L2SZuzG.gif"
    //   ]
    
    //   robot.hear(/\bso[o]+n\b/i, (res) => {
    //     res.send(res.random(images))
    // });


    //   const images = [
    //     "http://i.imgur.com/0lyao5E.gif",
    //     "http://i.imgur.com/0lyao5E.gif",
    //     "http://i.imgur.com/0lyao5E.gif",
    //     "http://i.imgur.com/xU7AhQh.gif",
    //     "http://i.imgur.com/dpFlIMx.gif",
    //     "http://i.imgur.com/mE2oDmm.gif",
    //     "http://i.imgur.com/ersspRE.gif"
    //   ]

      

    //   robot.respond(/today is (.*)/i, (res) => {
    //     const today = res.match[1]
  
    //     if (today === 'Friday') {
    //       res.reply('TGIF! https://media.giphy.com/media/1APaqOO5JHnWKLc7Bi/giphy-downsized.gif')
    //       return
    //     } else if (today == 'Monday') {
    //         res.reply('Good morning. Keep calm and pretend it’s not Monday.')
    //     }
      
    //     //res.reply('no it is a different day')
    //     //res.reply(res.random(images))


    //   })

// hubot-11 key:
// xoxb-948018646277-948020200677-IUrBw4O4zIiAfkVoDLUZgGTE


// const images = [
//   "This Hedgehog in a Car: https://i.redd.it/3ff38tcxdoh41.jpg",
//   "This cat's refraction: https://i.redd.it/afjrxrq55kh41.png",
//   "Japanese mannequins: https://i.redd.it/fgnke9b1sqh41.png",
//   "This adorable gang: https://i.redd.it/ncblq36egoh41.jpg",
//   "This cat looking at itself: https://i.redd.it/i4mh9k705rh41.jpg",
//   "This cautious cat: https://i.redd.it/7j135ym0zoh41.jpg",
//   "Cat with Princess Leia hair piece: https://i.redd.it/b9qx501v0sh41.jpg",
//   "There was a flood in Denmark and a guy posted this on social media: https://i.redd.it/thjubet5qqh41.jpg",
//   "Face plant: https://i.redd.it/ngg6ebpu8oh41.jpg"
// ]


//       // Send random image to a user specified in (.*) by adding @FristLast (choose from dropdown)
//       robot.hear(/motivate (.*)/i, function(res) {
//         const room = res.match[1];
//         return robot.messageRoom(room, res.random(images));
//       });

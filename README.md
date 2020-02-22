# Lemonbot

Lemonbot is here to cheer up you and your team! It lives in hubot-11 space and takes commands pushed in this space. 

### Commands performed

1. **Today's qoute and gif:**
Ask Lemonbot what is today and it will tell you day of the week, give you a quote and an animated Giffy image: 

    ```
    What is today?
    ```

2. **List users:**
Get a list of names for the users on our team: 

    ```
    List users
    ```

3. **Send Dilbert:**
Now you can send a Dilbert comic strip to any of the users on the list:

    ```
    send dilbert to @FristLast
    ```

4. **Show Kittens:**
If you need cuteness in your life, you can ask Lemonbot to show you a random picture/vides of kittens. They come from the /kittens subreddit via http request:

    ```
    cute kittens
    ```

**Additionally:**
Anytime someone mentions word `code`, Lemonbot will give a quote by Lunus Torvalds.
You can test Slack Web API to ensure connection is working: `test web api`


### Approach and issues
I used the hubot installation created during the last class. First I read through the Hubot documentation and tried to used available methods to fit project requirements and my own hubot idea. Unfortunately when working with messageRoom them I ran into issues and couldn't get it to work. I then decided to go to Slack documentation and start over. Unpon reading it I realized I needed to use Web API, installed and initiated it in my app, atherwards my method was working.

I researched many Slack methods and decided to use users.list to pull list of users for the direct message requirement. It needed 2-d array manipulation which was a bit challenging.

Testing and debugging wasn't very easy as I couln't console.log anythibng.

The direct messaging via messageRoom works only inside hubot-11. 

I used following JS concepts: if/then, switch, for loops, date object, array manipulation, throw/catch, json http request; and hubot available methods such as hear/send, respond/reply, messageRoom, random.

### Installation
Use **Hubot-11** app

Run this token in your app:

`HUBOT_SLACK_TOKEN=xoxb-948018646277-948025470981-Knk73dSPwRf1W40EhOPJqPdj ./bin/hubot --adapter slack`

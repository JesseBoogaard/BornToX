require(`dotenv`).config()
const Discord = require(`discord.js`);
const client = new Discord.Client();
const prefix = 'btx!';
const btx = require('./borntox.js');
const BTX = new btx();

client.on('message', msg => {
    if(msg.content.startsWith(prefix)) {
        return new Promise((fulfill, reject) => {
            BTX.GenerateNew().then((res) => {
                if(res != 'You died.'){
                    fulfill(msg.channel.send(res));
                } else {
                    reject(msg.channel.send('Born to fail, forced to retry.'));
                }
            })
        })
    }
})

client.login(process.env.TOKEN);
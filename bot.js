const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('428985941504557066').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },12000);
  

})









client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' RainbowBot ',' | Server Ranger ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j
        client.user.setGame(setGame[i],`https://www.twitch.tv/حب بلا حدود`);
    }, ms);

})
































client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
//const {token} = require('./auth.json');
const client = new Discord.Client({
	ws: {
		intents: [
			Discord.Intents.FLAGS.GUILD_MESSAGES,
			Discord.Intents.FLAGS.GUILDS,
		]
	}
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let poketResponses = [
	'slow',
	'weak',
	'smh',
	's l o w',
	'w e a k',
	'Slow pin',
	's\nm\nh',
	'Swoldowoodo',
	'Slow',
	'Weak',
	'1 min too late',
	'<:slowpoke:765233588630978620>',
];

client.on('message', async message => {
	if (message.guild.id === '568864639362793472') { // In MD PVP Alliance
		if (message.member.id === '337692171723341845') { // From JRE
			if (message.content.includes('https://www.reddit.com/r/TheSilphArena')) { // Links to TSA
				if (message.pinnable && !message.pinned) {
					// Select a response to send
					let response = poketResponses[Math.floor(Math.random() * poketResponses.length)];

					// Handle emojis (not currently used, but could be helpful so it gets to stay)
					if (response.startsWith(':') && response.endsWith(':')) {
						const emoji_name = response.replace(/:/g, '');
						const emoji = client.emojis.cache.find(emoji => emoji.name === emoji_name);
						response = `<:${emoji.name}:${emoji.id}>`;
					}

					// Send the response
					try {
						await message.channel.send(response);
					} catch(err) {
						console.error(err);
					}

					// Pin the message
					message.pin().catch(console.error);
				}
			}
		}
		if (message.member.id === '506940270558838809') { // From Poket
			if (poketResponses.includes(message.content.trim())) { // Matches a known response
				message.reply('NO U').catch(console.error);
			}
		}
	}
});
 
client.login(process.env.BOT_TOKEN);
//client.login(token);

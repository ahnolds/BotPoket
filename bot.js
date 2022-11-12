const Discord = require('discord.js');
//const {token} = require('./auth.json');
const client = new Discord.Client({
	intents: [
		Discord.GatewayIntentBits.GuildMessages,
		Discord.GatewayIntentBits.Guilds,
	]
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
		// From JRE linking to TSA or from 3L linking to stadiumgaming
		if ((message.member.id === '337692171723341845' && message.content.includes('https://www.reddit.com/r/TheSilphArena')) ||
		    (message.member.id === '145028591837511680' && message.content.includes('https://www.stadiumgaming.gg'))) {
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
		if (message.member.id === '506940270558838809') { // From Poket
			if (poketResponses.includes(message.content.trim())) { // Matches a known response
				message.reply('NO U').catch(console.error);
			}
		}
		if (message.member.id === '340594412209831946') { // From Midget
			if (Message.content.match(/\b(?:son|mom|child)\b/i)) {
				message.reply('You\'re not my real mom!').catch(console.error);
			}
		}
		if (message.member.id === '330455815972454412') { // From SirJamz
			if (Message.content.match(/\bbot\b|bot\s*poket/i)) {
				message.react('🔱').catch(console.error);
				message.react('732274621704962178').catch(console.error);
			}
		}
	} else if (message.guild.id === '601944898723381259') { // In test
		if (message.content == '!botpoket') {
			message.react('👍').catch(console.error);
		}
	}
});
 
client.login(process.env.BOT_TOKEN);
//client.login(token);

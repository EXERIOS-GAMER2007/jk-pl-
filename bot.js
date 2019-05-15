const developers = ['your id'];
client.on('message', message => {
    var prefix = =)"
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/omgdoma");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  } else 
  if (message.content.startsWith(prefix + 'pl')) {
  client.user.setActivity(argresult , {type:'Playing'});
      message.channel.send(` ☑ Client Activity Now Is : \`Playing ${argresult} \` `)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(` Client UserName Changed To : \` ${argresult}\` `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
      message.channel.send(` Client Avatar Changed To : \` ${argresult}\` `)
       } else 
  if (message.content.startsWith(prefix + 'cstop')) {
  client.user.setActivity(argresult , {type:''});
      message.channel.send(` ☑ Client Activity Now Is : \` ${argresult} \` `)
}
});


client.login(process.env.BOT_TOKEN);

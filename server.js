/////////////////////////////CONSTANTES///////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json")
///////////////PRESENCIA///////////////////////////////////////////////////////
function presence(){
  client.user.setPresence({
      status:"online",
      activity: {
        name: "💥Hola mi prefix es /",
        type: "WATCHING"
      }     
  })
}
//////////////////////////////ESTADO///////////////////////////////////////////
client.on("ready", () => {
    console.log("Hoy es navidad!!");
    presence();
 });
 ////////////////////////////VARIABLES/////////////////////////////////////////
 let prefix = config.prefix;
 ////////////////////////////MENSAJES//////////////////////////////////////////
 client.on("message", (message) => {
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
/////////////////////////////COMANDOS/////////////////////////////////////////
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();

  if(command === "nombre"){
    message.channel.send(message.member.displayName + ' **adivine?**')
 }
 if(command === 'ayuda'){
  const embed = new Discord.MessageEmbed()
  .setTitle('♛Feli♛')
  .setDescription('Bot en creacion', '/')
  .setColor("RANDOM")
  .addField('Comandos', 'invitacion,nombre,support,members,avatar,roblox,trump,8ball,meme')
  .addField('Prefix', '"/"', )
  .setAuthor(message.member.displayName, message.author.avatarURL())
  .setThumbnail('')
  .setImage('https://i.ytimg.com/vi/GV2wzNQ0JnQ/maxresdefault.jpg')   
message.channel.send(embed);
}
if(command === "serverinfo"){
  const embed = new Discord.MessageEmbed()
    .setTitle('Informacion del servidor')
    .setColor("RANDOM")
    .setDescription("Informacion actual del servidor")
    .addField('Nombre del servidor', message.guild.name, true)
    .addField('Integrantes', message.guild.memberCount, true)
    .addField('Region', message.guild.region, true)
    .setAuthor(message.member.displayName, message.author.avatarURL())
    .setThumbnail(message.guild.iconURL())
    .setImage('https://media.giphy.com/media/YPHcJBDYqxq5a/giphy.gif')
    .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    .setTimestamp();
  message.channel.send(embed);
}
if(command === "support"){
  const embed = new Discord.MessageEmbed()
    .setTitle('♛Feli♛ Support')
    .setColor("RANDOM")
    .setDescription("Servidor oficial de ♛Feli♛")
    .setAuthor(message.member.displayName, message.author.avatarURL())
    .setImage('https://cdn.discordapp.com/attachments/790710465160151050/791350334978261042/image0_1.jpg')
    .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    .setTimestamp()
    .setURL('https://discord.gg/kxP3Cabxhh');
  message.channel.send(embed);
}
if(command === "invitacion"){
  const embed = new Discord.MessageEmbed()
    .setTitle('**Clickea aqui**')
    .setDescription('Invita a ♛Feli♛ a tu server clickeando en "Clickea aqui"')
    .setColor('RANDOM')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=788089712178102323&permissions=8&scope=bot')
    .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    .setTimestamp()
    .setImage('https://media1.tenor.com/images/4bb0878f43df8a4902751e0eca0ea8fc/tenor.gif?itemid=15102794');
  message.channel.send(embed);
}
if(command === "members"){
  const embed = new Discord.MessageEmbed()
    .addField('Miembros', message.guild.memberCount, true)
    .setColor('2EFE2E');
  message.channel.send(embed);
}
if(message.content.startsWith(prefix + "8ball")) {//definimos el comando
  let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]//aqui las probables respuestas que va a tener
  var random = respuesta[Math.floor(Math.random() * respuesta.length)]//aqui decimos que va a elegir una respuesta random de el let respuesta
const embed = new Discord.MessageEmbed()//definimos el embed

.addField("A su pregunta", `${args.join(" ")}`)//primer valor decimos a su pregunta y en el segundo valor va la pregunta que iso el usuario
.addField("Mi respuesta", `${random}`)//primer valor decimos "Mi respuesta" y en el segundo decimos que va a agarrar el var random
.setColor("RANDOM")//un color random
message.channel.send(embed)//y que mande el embed
}
if(command === 'md'){ //abrimos el comando
  message.delete()//eliminarÃ¯a tu mensaje.
  let user = message.mentions.users.first() // Primero se tendra que mencionar a un usuario.
  
  if(!user) return message.channel.send('Menciona a un usuario.') //Si no se cumple la variable de arriba nos retornara el mensaje ese.
  
  let texto = args.join(" ").slice(1) //Colocamos las args que detectarÃ¯Â¿Â½ el bot para enviarle al usuario.
  if(!texto) return message.channel.send('Coloca un texto para enviarle.') //Si no se cumple la varÃ¯able de arriba retornara
  
  
  user.send(texto)
}
if(command === "trump"){
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
//Como en el comando anterior, si no tienes definido args, lo defines, pero si si lo tienes, no, obviamente xd
 
message.delete() //Aca borraremos el comando activador, para que nadie sepa quien lo escribio xd

        let mensaje = args.join('%20')//Esto hara que cada oracion que tenga un espacio, el espacio se cambie a %20, no lo toquen, porque o sino, no funcionara

        if(!mensaje) return message.channel.send(' Debes de colocar un mensaje para que trump lo diga!').then(m => m.delete({timeout: 7000}))
//Aca le diremos al user, que diga lo que quiere que diga trump, por si no lo hace

        let api = `https://api.no-api-key.com/api/v2/trump?message=${mensaje}`
//este sera el link que utilizaremos, no lo lleguen a cambiar, o sino no funcionara

        const TrumpDijo = new Discord.MessageEmbed() //Definimos el embed
        .setImage(api)//Haremos que coloque la imagen con el texto que escribimos
        .setColor('RANDOM')//Es el color del embed (opcional)

        message.channel.send(TrumpDijo)
}
if(command === "avatar"){
  const Discord = require("discord.js")

if(message.author.bot) return; //detecta si es un bot
let miembro = message.mentions.users.first() //Agarra a la primera menci�n 
if (!miembro) { //Si no hay menci�n mandara el avatar del autor del mensaje
const embed = new Discord.MessageEmbed()
    .setImage(`${message.author.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor('RANDOM')
    .setFooter(`Avatar de ${message.author.tag}`);
    
message.channel.send(embed);
} else { //Si hay menci�n dar� el avatar del mencionado.
const embed = new Discord.MessageEmbed()
    .setImage(`${miembro.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor('RANDOM')
    .setFooter(`Avatar de ${miembro.tag}`);

message.channel.send(embed);
}}
if(command === "roblox"){
let username = args.join(' '); //Declaramos una variable que tendra los args, el username.
 if(!username) return message.channel.send('Agrega el usuario.');//return si no lo agrega el usuario.

let url = `http://www.roblox.com/Thumbs/Avatar.ashx?x=420&y=420&Format=Png&username=${username}` //Ponemos un marcador de texto dentro de la plant de cadena, el url que mostrara el avatar.

let avatar = new Discord.MessageEmbed()
.setColor('2EFEC8')
.setImage(url)//Muestra el avatar.
message.channel.send(avatar);
}
if(command === "meme"){
  let memes = ['https://cdn.discordapp.com/attachments/680928395399266314/803349990248284210/mark.mp4','https://cdn.discordapp.com/attachments/536423687486701572/803347272096153670/descarga_2.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803342258409177158/IMG_0299.JPG','https://cdn.discordapp.com/attachments/536423687486701572/803342189178126336/IMG_0286.JPG','https://cdn.discordapp.com/attachments/536423687486701572/803336629196423179/FB_IMG_16114267856636260.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803336841226878976/hfq67kture561.png','https://cdn.discordapp.com/attachments/536423687486701572/803342153723936808/IMG_0281.JPG','https://images3.memedroid.com/images/UPLOADED291/5df791f2b4b68.jpeg','https://i.ytimg.com/vi/qRdzNxAwdkQ/maxresdefault.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803305099350245396/IMG-20210122-WA0005.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803304801370505286/IMG-20210124-WA1152.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803301108197097503/IMG-20210124-WA0219.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803293475981230155/FB_IMG_1602225524801.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803276418745499648/f12c4d4d8eb5fdef12606d743ab64045.png','https://cdn.discordapp.com/attachments/536423687486701572/803275348284276776/ed338f3c047e1c8f1c0b364a57282a43.png','https://cdn.discordapp.com/attachments/536423687486701572/803275207971962901/5f36ddb1ead32.png','https://cdn.discordapp.com/attachments/536423687486701572/803265264107782194/IMG_20210125_090810.jpg','https://cdn.discordapp.com/attachments/536423687486701572/803145553478156348/FB_IMG_1592794148904.jpg','https://cdn.discordapp.com/attachments/670372981729394690/803358101667446844/senores_y_senoras_me_trolearon_.mp4','https://cdn.discordapp.com/attachments/670372981729394690/803358881844559912/dd88ea23183aeec4.mp4','https://cdn.discordapp.com/attachments/670372981729394690/803358983557218375/WHEN_MI_MAMI_XD_VIDEO_ORIGINAL720P_HD.mp4','https://cdn.discordapp.com/attachments/536423687486701572/803278334245994496/600cf275f2059.jpeg','https://cdn.discordapp.com/attachments/776550045917904956/803250459228766239/1cd577b62d38ddc6b26c92f9df14bfcc.mp4','https://cdn.discordapp.com/attachments/776550045917904956/802179428977344543/video0_3.mp4','https://pbs.twimg.com/media/EHLlpcVXUAAXtDA.jpg'];//Crea una variable con todo lo que quieras, url de imágenes, nombres, etc. 

let selector = memes[Math.floor(memes.length * Math.random())];//Acá creamos un selector random de la variable memes.

message.channel.send(selector);
}
if(command === "clear"){
message.delete();
if (!message.member.hasPermission("MANAGE_MESSAGES"))//Necesitas permisos para eliminar mensajes
  return message.channel.send(
    "No Tienes Permisos Para Utilizar Este Comando"//Cualquiera que no tenga permiso no podr� utilizar este comando
  );

if (!args[0])
  return message.channel.send(`Por Favor, Dame Una Cantidad`);

if (isNaN(args[0]))
  return message.channel.send(`Por favor, Dame Un Valor Numerico`);

if (args[0] < 4)//Aqui puedes definir el minimo de mensajes
  return message.channel.send(
    `Puedes eliminarlos ${args[0]} tu mismo, no son tantos mensajes`
  );

if (args[0] > 100)//Esto no lo modifiquen
  return message.channel.send(
    `No puedo eliminar mas de 100 mensajes ${args[0]} es el limite de discord`
  );

let Reason = args.slice(1).join(" ") || "Ninguna razon proporcionada";

message.channel.bulkDelete(args[0]).then(Message => {
  let embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`**__Mensajes Eliminados__**`)
    .addField(`Staff`, `**${message.author.tag}**`)
    .addField(`Canal`, `**${message.channel.name}**`)
    .addField(`Mensajes Eliminados`, `**${Message.size}**`)
    .addField(`�Razon?`, `**${Reason}**`)
    .setFooter(`Pedido Por ${message.author.username}`)
    .setTimestamp();
  return message.channel
    .send(embed)
    .then(msg => msg.delete({ timeout: 10000 }));
});
}
if(command === "say"){
const channel = message.mentions.channels.first() // Definimos la constante del canal al que vamos a enviar el mensaje
let sendch = message.guild.channels.cache.find(channel => channel.name === `${channel}`) // Creamos la "variable" sendch en busca del canal mencionado anteriormente en channel
let as = args.slice(1).join(' '); // Creamos la variable del contenido que tendrá el mensaje por argumentos 
if (!channel) return message.channel.send('Especifica el canal') // Si no especifica el canal retornamos un mensaje exiguiendole que mencione el canal
if (!as) return message.channel.send('Especifica lo que quieres decir'); // Si no menciona lo que va a decir el BOT retornamos un mensaje que lo exigua
channel.send(as);
}
if(message.content.startsWith(prefix + "memide")) {//definimos el comando
  let respuesta = ["2cm", "3cm", "5cm", "8cm", "10cm", "15cm", "20cm", "25cm"]//aqui las probables respuestas que va a tener
  var random = respuesta[Math.floor(Math.random() * respuesta.length)]//aqui decimos que va a elegir una respuesta random de el let respuesta
const embed = new Discord.MessageEmbed()//definimos el embed

.setTitle(':eggplant:Cuanto me mide?:eggplant:')
.addField("Te mide", `${random}`)//primer valor decimos "Mi respuesta" y en el segundo decimos que va a agarrar el var random
.setColor("BF00FF")//un color random
message.channel.send(embed)//y que mande el embed
}
if (command === "servidorinfo" ) {//primero tienen que tener command y args definidos
  var server = message.guild;//definimos server
  
  
  const embed = new Discord.MessageEmbed()//creamos un embe
  .setTitle("**INFORMACION ACTUAL DEL SERVIDOR**")//establecemos descripcion
  .setThumbnail(server.iconURL())//aca aparecera el icono del server
  .setAuthor(server.name, server.iconURL())//aca va a aparecer el icono y nombre del server
  .addField('**ID**', server.id, true)//esto es para obtener la id del server
  .addField('**FECHA DE CREACION**',`${server.joinedAt}`)//con esto obtenemos la fecha de creacion del server
  .addField("**REGION:**", message.guild.region)//con esto obtenemos la region del server
  .addField("**OWNER DEL SERVIDOR:**",`${server.owner.user}`)//con esto obtenemos el creador del server
  .addField("** ID DEL OWNER :**",`${server.ownerID}`)//con esto la id del creador del server
  .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
  //con esto todos los canales del servidor
  .addField('**MIEMBROS**', server.memberCount, true)//con esto obtenemos los miembros que hay en el server
  .addField("**BOTS**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)//con esto obtenemos los bots del server
  .addField('**EMOJIS**',message.guild.emojis.cache.size)//con esto todos los emojis del server 
  .addField('**BOOSTER**',message.guild.premiumSubscriptionCount.toString())// con esto el numero de booster del server
  .addField('**NIVEL DE VERIFICACION**',`${server.verificationLevel}`)//con esto obtenemos el nivel de verificacion del server
  .addField('**ROLES**', server.roles.cache.size,true)//con esto la cantidad de roles
  .setColor("RANDOM")//establecemos el color  yo puse random para que salga diferente color
  message.channel.send(embed);//enviamos el embed
    
}
if(command === "decir"){
  const channel = message.mentions.channels.first() // Definimos la constante del canal al que vamos a enviar el mensaje
  let sendch = message.guild.channels.cache.find(channel => channel.name === `${channel}`) // Creamos la "variable" sendch en busca del canal mencionado anteriormente en channel
  let as = args.slice(1).join(' '); // Creamos la variable del contenido que tendrá el mensaje por argumentos 
  if (!channel) return message.channel.send('Especifica el canal') // Si no especifica el canal retornamos un mensaje exiguiendole que mencione el canal
  if (!as) return message.channel.send('Especifica lo que quieres decir'); // Si no menciona lo que va a decir el BOT retornamos un mensaje que lo exigua
  channel.send(as);
  const embed = new Discord.MessageEmbed()

  .setColor('RANDOM')
 message.channel.send(embed)
}
if(command === "hablar"){
  let args = msg.content.substring().split(" ");
  switch(args[0]){
      case '!embed':
          if(!args[1]) {
              msg.reply("No tengo nada para decir").then(msg.author.lastMessage.delete())
          }
          let msgArgs = args.slice(1).join(" ");
          msg.author.lastMessage.delete()

      const embed = new Discord.MessageEmbed()
      .setTitle(`${msgArgs}`)
      .setColor("RED")
          msg.reply(embed)
}}
})


 client.login(config.token);



 client.on('message', msg => {
  if(msg.content.includes('/members')
     || msg.content.includes('/ayuda')
     || msg.content.includes('/support')
     || msg.content.includes('invitacion')
     || msg.content.includes('/nombre')
     || msg.content.includes('/avatar')
     || msg.content.includes('/serverinfo')
     || msg.content.includes('/8ball')
     || msg.content.includes('/clear')
     || msg.content.includes('/md')
     || msg.content.includes('/trump')
     || msg.content.includes('/roblox')
     || msg.content.includes('/meme')
    ){msg.delete()
    }});
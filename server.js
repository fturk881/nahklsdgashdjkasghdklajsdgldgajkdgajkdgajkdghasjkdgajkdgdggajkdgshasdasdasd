const express = require('express');
const http = require('http');
const bookman = require("bookman");
const handlebars = require("express-handlebars");
const url = require("url");
const Discord = require("discord.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const handlebarshelpers = require("handlebars-helpers")();
const path = require("path");
const passport = require("passport");
const { Strategy } = require("passport-discord");
const session = require("express-session");
const client = new Discord.Client();
const randomString = require("random-string");
const animals = require('random-animals-api'); 
const fs = require('fs');
const Animal = require('./api-sistemi.js');
const randomimage = new Animal();


const db = (global.db = {});










let ranks = ["javascript", "html", "python", "bdfd", "topluluk", "api"];
for (let rank in ranks) {
  db[ranks[rank]] = new bookman(ranks[rank]);
}


const IDler = {
  botID: "855376108290572298",
  botToken: "ODU1Mzc2MTA4MjkwNTcyMjk4.YMxlFA.pS-fmqgv3xnGYLpPlMc5tbGOU7U",
  botSecret: "QkFlNj4v9hKybtGj-e4zQPETG0ZxGMfa",
  botCallbackURL: "http://code.discordludex.ga/callback",
  sunucuID: "855373658834993153",
  sunucuDavet: "https://discord.gg/e3pj9rreDU",
  kodLogKanalı: "855791104216924160",
  kurucurol: "855668731086635009",
  yoneticirol: "855671108492460033",
  kodPaylaşımcıRolü: "855759708916154389",
  boosterRolü: "BOOSTER ROLÜ İD",
  html_rol: "855793952031506432",
  javascript_rol: "855793944914690048",
  python_rol: "855793947572699136",
  bdfd_rol: "855793949716250624"
};

const app = express();


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false
  })
);
app.use(cookieParser());
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
    layoutsDir: `${__dirname}/views/layouts/`,
    helpers: handlebarshelpers
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
const scopes = ["identify", "guilds"];
passport.use(
  new Strategy(
    {
      clientID: IDler.botID,
      clientSecret: IDler.botSecret,
      callbackURL: IDler.botCallbackURL,
      scope: scopes
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => done(null, profile));
    }
  )
);
app.use(
  session({
    secret: "secret-session-thing",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.get(
  "/giris",
  passport.authenticate("discord", {
    scope: scopes
  })
);
app.get(
  "/callback",
  passport.authenticate("discord", {
    failureRedirect: "/error"
  }),
  (req, res) => {
    res.redirect("/");
  }
);
app.get("/cikis", (req, res) => {
  req.logOut();
  return res.redirect("/");
});
app.get("/davet", (req, res) => {
  res.redirect(IDler.sunucuDavet);
});

/* SAYFALAR BURADAN İTİBAREN */
app.get("/", (req, res) => {
  res.render("index", {
    user: req.user
  });
});





const templateDir = path.resolve(__dirname + `/`); // SITE DOSYA KONTROL





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const renderTemplate = (res, req, template, data = {}) => {
  const baseData = {
    path: req.path
  };
  res.render(
    path.resolve(`${templateDir}${path.sep}${template}`),
    Object.assign(baseData, data)
  );
};


const yusuffozen = require("hastebin-gen");



  
app.get("/v11-to-v12", (req, res) => {
  if (!req.query.message) {
    renderTemplate(res, req, "./views/v11-to-v12.ejs");
  } else {
    var asıl = req.query.message
    .split("disableEveryone: true")
    .join("disableMentions: 'everyone'")
  
    .split(".users.get")
    .join(".users.cache.get")

    .split(".messages.get")
    .join(".messages.cache.get")

    .split(".members.get")
    .join(".members.cache.get")
  
      .split(".channel.get")
    .join(".channels.cache.get")
  
        .split(".channels.get")
    .join(".channels.cache.get")
  
    .split(".users.find")
    .join(".users.cache.find")
  
    .split(".fetchUser")
    .join(".users.fetch")
  
    .split(".fetchMember")
    .join(".members.fetch")
  
    .split(".fetchMembers")
    .join(".members.fetch")
  
    .split(".fetchMessage")
    .join(".messages.fetch")
  
    .split(".fetchMessages")
    .join(".messages.fetch")
  
    .split(".fetchPinnedMessages")
    .join(".messages.fetchPinned")
  
    .split(".sendMessage")
    .join(".send")
  
    .split(".sendEmbed")
    .join(".send")
  
    .split(".sendCode")
    .join(".send")
  
    .split(".sendFile")
    .join(".send")
  
    .split("sendFiles")
    .join("send")
  
    .split("addRole")
    .join("roles.add")

    .split(".addRoles")
    .join(".roles.add")
  
    .split(".removeRole")
    .join(".roles.remove")
  
    .split(".removeRoles")
    .join(".roles.remove")
  
    .split(".setRoles")
    .join(".roles.set")
  
    .split(".roles.get")
    .join(".roles.cache.get")
  
    .split(".colorRole")
    .join(".roles.color")
  
    .split(".highestRole")
    .join(".roles.highest")
  
    .split(".hoistRole")
    .join(".roles.hoist")
  
    .split(".ban")
    .join(".members.ban")
  
    .split(".unban")
    .join(".members.unban")
  
    .split(".avatarURL")
    .join(".avatarURL()")

      .split(".displayAvatarURL")
    .join(".displayAvatarURL()")

      .split(".unban")
    .join(".members.unban")

      .split(".iconURL")
    .join(".iconURL()")

      .split(".splashURL")
    .join(".splashURL()")

      .split(".playFile")
    .join(".play")

      .split(".playStream")
    .join(".play")

      .split(".playArbitraryInput")
    .join(".play")

      .split(".playBroadcast")
    .join(".play")

      .split(".playOpusStream")
    .join(".play")

      .split(".playConvertedStream")
    .join(".play")

      .split(".createVoiceBroadcast")
    .join(".voice.createBroadcast")

      .split(".ping")
    .join(".ws.ping")

      .split(".pings")
    .join(".shard.ping")

      .split("client.on('presenceUpdate', (oldMember, newMember)")
    .join("client.on('presenceUpdate', (oldPresence, newPresence)")

      .split("client.on('reconnecting', ()")
    .join("client.on('shardReconnecting', id")

      .split("client.on('resume', replayed")
    .join("client.on('shardResume', (replayed, shardID)")

      .split(".status")
    .join(".ws.status")

      .split(".voiceConnections")
    .join(".voice.connections")

      .split("client.on('voiceStateUpdate', (oldMember, newMember)")
    .join("client.on('voiceStateUpdate', (oldState, newState)")

      .split("options.shardId")
    .join("options.shards")

      .split(".createGuild")
    .join(".guilds.create")

      .split(".setGame")
    .join(".setActivity")

      .split(".deleteAll")
    .join(".clear")

      .split(".users.exists")
    .join(".users.cache.some")

      .split(".addRestrictedRole")
    .join(".roles.add")

      .split(".addRestrictedRoles")
    .join(".roles.adds")

      .split(".removedRestrictedRoles")
    .join(".roles.removes")

      .split(".presence.game")
    .join(".presence.activities")

      .split(".createChannel")
    .join(".channels.create")

      .split(".createEmoji")
    .join(".emojis.create")

      .split(".createRole")
    .join(".roles.create")

      .split(".deleteEmoji")
    .join(".emojis.resolve")

      .split(".defaultRole")
    .join(".roles.everyone")

      .split(".pruneMembers")
    .join(".members.prune")

      .split(".setChannelPosition")
    .join(".setPosition")

      .split(".setRolePosition")
    .join(".setPosition")

      .split(".calculatedPosition")
    .join(".position")

      .split(".position")
    .join(".rawPosition")

      .split(".overwritePermissions")
    .join(".createOverwrite")

      .split(".replacePermissionOverwrites")
    .join(".overwritePermissions")

      .split(".deaf")
    .join(".voice.deaf")

      .split(".selfDeaf")
    .join(".voice.selfDeaf")

      .split(".serverDeaf")
    .join(".voice.serverDeaf")

      .split(".hasPermissions")
    .join(".hasPermission")

      .split(".mute")
    .join(".voice.mute")

      .split(".selfMute")
    .join(".voice.selfMute")

      .split(".serverMute")
    .join(".voice.serverMute")

      .split(".setDeaf")
    .join(".voice.setDeaf")

      .split(".setVoiceChannel")
    .join(".voice.setChannel")

      .split(".setMute")
    .join(".voice.setMute")

      .split(".setVoiceChannel(null)")
    .join(".voice.kick()")

      .split(".speaking")
    .join(".voice.speaking")

      .split(".voiceChannel")
    .join(".voice.channel")

      .split(".voiceChannelID")
    .join(".voice.channelID")

      .split(".voiceSessionID")
    .join(".voice.sessionID")

      .split(".clearReactions")
    .join(".reactions.removeAll")

      .split(".isMemberMentioned")
    .join(".mentions.has")

      .split(".isMentioned")
    .join(".mentions.has")

      .split(".missingPermissions")
    .join(".missing")

      .split("RichEmbed()")
    .join("MessageEmbed()")

      .split(".serialize")
    .join(".permissions.serialize")

      .split(".createCollector")
    .join(".createMessageCollector")

      .split(".emojis.get")
    .join(".emojis.cache.get")
 
        yusuffozen(asıl, { extension: "LudexCode" }).then(x => res.redirect(x));
   
  }
});









































app.get("/apiler", (req, res) => {
    renderTemplate(res, req, "./views/apiler.ejs");

});






























































































































































//randomimage



app.get("/bitegif", (req, res) => {

 
  randomimage.bitegif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/blushgif", (req, res) => {

 
  randomimage.blushgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/crygif", (req, res) => {

 
  randomimage.crygif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/cuddlegif", (req, res) => {

 
  randomimage.cuddlegif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/dancegif", (req, res) => {

 
  randomimage.dancegif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/feedgif", (req, res) => {

 
  randomimage.feedgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/fluffgif", (req, res) => {

 
  randomimage.fluffgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/holoimg", (req, res) => {

 
  randomimage.holoimg()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/huggif", (req, res) => {

 
  randomimage.huggif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/kissgif", (req, res) => {

 
  randomimage.kissgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/kitsuneimg", (req, res) => {

 
  randomimage.kitsuneimg()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/lickgif", (req, res) => {

 
  randomimage.lickgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/okamiimg", (req, res) => {

 
  randomimage.okamiimg()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/patgif", (req, res) => {

 
  randomimage.patgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/pokegif", (req, res) => {

 
  randomimage.pokegif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/senkoimg", (req, res) => {

 
  randomimage.senkoimg()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/slapgif", (req, res) => {

 
  randomimage.slapgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/smilegif", (req, res) => {

 
  randomimage.smilegif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/tailgif", (req, res) => {

 
  randomimage.tailgif()
    .then(url => res.json({ "link": url }))
  
  
});

app.get("/ticklegif", (req, res) => {

 
  randomimage.ticklegif()
    .then(url => res.json({ "link": url }))
  
  
});










app.get("/dog", (req, res) => {

 
  randomimage.dog()
    .then(url => res.json({ "link": url })
          
          
         
         
         )
  
  
});


app.get("/cat", (req, res) => {
 
  randomimage.cat()
    .then(url => res.json({ "link": url })
         
         
         )
});

app.get("/bunny", (req, res) => {

  
  randomimage.bunny()
    .then(url => res.json({ "link": url })
         
         
         )
});

app.get("/duck", (req, res) => {
  
  
  randomimage.duck()
    .then(url => res.json({ "link": url })
         
         
         )
});

app.get("/fox", (req, res) => {

 
  randomimage.fox()
    .then(url => res.json({ "link": url })
         
         
         )
});

app.get("/lizard", (req, res) => {

 
  randomimage.lizard()
    .then(url => res.json({ "link": url })
         
         
         )
});

app.get("/koala", (req, res) => {

 
  randomimage.koala()
    .then(url => res.json({ "link": url })
         
         
         )
});

app.get("/shiba", (req, res) => {

  
  randomimage.shiba()
    .then(url => res.json({ "link": url })
         
         
         )
});


app.get("/panda", (req, res) => {
 
  randomimage.panda()
    .then(url => res.json({ "link": url })
         
         
         )
});











































































  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  














  
  app.get("/javascript", (req, res) => {
  var data = db.javascript.get("kodlar");
  data = sortData(data);
  res.render("javascript", {
    user: req.user,
    kodlar: data
  });
});
app.get("/javascript/:id", (req, res) => {
  if (
    !req.user ||
    !client.guilds.cache.get(IDler.sunucuID).members.cache.has(req.user.id)
  )
    return res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 137,
          message:
            "Kodları Görebilmek İçin Discord Sunucumuza Katılmanız | Siteye Giriş Yapmanız Gerekmektedir."
        }
      })
    );

  var id = req.params.id;
  if (!id) req.redirect("/");
  let data = db.javascript.get("kodlar");
  var code = findCodeToId(data, id);
  if (code) {
    let guild = client.guilds.cache.get(IDler.sunucuID);
    let member = req.user ? guild.members.cache.get(req.user.id) : null;
    if (
      member &&
      (member.roles.cache.has(IDler.javascript_rol) ||
        member.roles.cache.has(IDler.boosterRolü) ||
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
        member.roles.cache.has(IDler.yoneticirol))
    ) {
      res.render("kod", {
        user: req.user,
        kod: code
      });
    } else {
      res.redirect(
        url.format({
          pathname: "/hata",
          query: {
            statuscode: 501,
            message: "Bu kodu görmek için gerekli yetkiniz yok."
          }
        })
      );
    }
  } else {
    res.redirect("/");
  }
});
  
  






  
  app.get("/html", (req, res) => {
  var data = db.html.get("kodlar");
  data = sortData(data);
  res.render("html", {
    user: req.user,
    kodlar: data
  });
});
app.get("/html/:id", (req, res) => {
  if (
    !req.user ||
    !client.guilds.cache.get(IDler.sunucuID).members.cache.has(req.user.id)
  )
    return res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 137,
          message:
            "Kodları Görebilmek İçin Discord Sunucumuza Katılmanız | Siteye Giriş Yapmanız Gerekmektedir."
        }
      })
    );

  var id = req.params.id;
  if (!id) req.redirect("/");
  let data = db.html.get("kodlar");
  var code = findCodeToId(data, id);
  if (code) {
    let guild = client.guilds.cache.get(IDler.sunucuID);
    let member = req.user ? guild.members.cache.get(req.user.id) : null;
    if (
      member &&
      (member.roles.cache.has(IDler.html_rol) ||
        member.roles.cache.has(IDler.boosterRolü) ||
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
        member.roles.cache.has(IDler.yoneticirol))
    ) {
      res.render("kod", {
        user: req.user,
        kod: code
      });
    } else {
      res.redirect(
        url.format({
          pathname: "/hata",
          query: {
            statuscode: 501,
            message: "Bu kodu görmek için gerekli yetkiniz yok."
          }
        })
      );
    }
  } else {
    res.redirect("/");
  }
});
  
  










  
  app.get("/python", (req, res) => {
  var data = db.python.get("kodlar");
  data = sortData(data);
  res.render("python", {
    user: req.user,
    kodlar: data
  });
});
app.get("/python/:id", (req, res) => {
  if (
    !req.user ||
    !client.guilds.cache.get(IDler.sunucuID).members.cache.has(req.user.id)
  )
    return res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 137,
          message:
            "Kodları Görebilmek İçin Discord Sunucumuza Katılmanız | Siteye Giriş Yapmanız Gerekmektedir."
        }
      })
    );

  
  var id = req.params.id;
  if (!id) req.redirect("/");
  let data = db.python.get("kodlar");
  var code = findCodeToId(data, id);
  if (code) {
    let guild = client.guilds.cache.get(IDler.sunucuID);
    let member = req.user ? guild.members.cache.get(req.user.id) : null;
    if (
      member &&
      (member.roles.cache.has(IDler.python_rol) ||
        member.roles.cache.has(IDler.boosterRolü) ||
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
        member.roles.cache.has(IDler.yoneticirol))
    ) {
            
      res.render("kod", {
        user: req.user,
        kod: code
        
      });
    } else {
      res.redirect(
        url.format({
          pathname: "/hata",
          query: {
            statuscode: 501,
            message: "Bu kodu görmek için gerekli yetkiniz yok."
          }
        })
      );
    }
  } else {
    res.redirect("/");
  }
});
  
  



















  
  app.get("/bdfd", (req, res) => {
  var data = db.bdfd.get("kodlar");
  data = sortData(data);
  res.render("bdfd", {
    user: req.user,
    kodlar: data
  });
});
app.get("/bdfd/:id", (req, res) => {
  if (
    !req.user ||
    !client.guilds.cache.get(IDler.sunucuID).members.cache.has(req.user.id)
  )
    return res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 137,
          message:
            "Kodları Görebilmek İçin Discord Sunucumuza Katılmanız | Siteye Giriş Yapmanız Gerekmektedir."
        }
      })
    );

  var id = req.params.id;
  if (!id) req.redirect("/");
  let data = db.bdfd.get("kodlar");
  var code = findCodeToId(data, id);
  if (code) {
    let guild = client.guilds.cache.get(IDler.sunucuID);
    let member = req.user ? guild.members.cache.get(req.user.id) : null;
    if (
      member &&
      (member.roles.cache.has(IDler.bdfd_rol) ||
        member.roles.cache.has(IDler.boosterRolü) ||
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
        member.roles.cache.has(IDler.yoneticirol))
    ) {
      res.render("kod", {
        user: req.user,
        kod: code
      });
    } else {
      res.redirect(
        url.format({
          pathname: "/hata",
          query: {
            statuscode: 501,
            message: "Bu kodu görmek için gerekli yetkiniz yok."
          }
        })
      );
    }
  } else {
    res.redirect("/");
  }
});
  
  




















































































































  
  
  
  
  
  
  
  
  

























  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

app.get("/topluluk", (req, res) => {
  var data = db.topluluk.get("kodlar");
  data = sortData(data);
  res.render("topluluk", {
    user: req.user,
    kodlar: data
  });
});

app.get("/topluluk/:id", (req, res) => {
  if (
    !req.user ||
    !client.guilds.cache.get(IDler.sunucuID).members.cache.has(req.user.id)
  )
    return res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 137,
          message:
            "Kodları Görebilmek İçin Discord Sunucumuza Katılmanız | Siteye Giriş Yapmanız Gerekmektedir."
        }
      })
    );

  
  var id = req.params.id;
  if (!id) req.redirect("/");
  let data = db.topluluk.get("kodlar");
  var code = findCodeToId(data, id);
  if (code) {
    res.render("kod", {
      user: req.user,
      kod: code
    });
  } else {
    res.redirect("/");
  }
});
app.get("/profil/:id", (req, res) => {
  let id = req.params.id;
  let member = client.guilds.cache.get(IDler.sunucuID).members.cache.get(id);
  if (!member)
    res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 501,
          message: "Belirtilen Profil Bulunamadı"
        }
      })
    );
  else {
    let perms = {
      html:
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.yoneticirol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
        member.roles.cache.has(IDler.boosterRolü) ||
        member.roles.cache.has(IDler.javascript_rol),
      python:
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.yoneticirol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
        member.roles.cache.has(IDler.boosterRolü) ||
        member.roles.cache.has(IDler.html_rol),
      bdfd:
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.yoneticirol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
        member.roles.cache.has(IDler.boosterRolü),
      
      destekçi: 
      
      member.roles.cache.has(IDler.boosterRolü),
      
      
      yetkili:
        member.roles.cache.has(IDler.kurucurol) ||
        member.roles.cache.has(IDler.yoneticirol) ||
        member.roles.cache.has(IDler.kodPaylaşımcıRolü)
    };
    res.render("profil", {
      user: req.user,
      member: member,
      avatarURL: member.user.avatarURL(),
      perms: perms,
      stats: db.api.get(`${member.user.id}`)
    });
  }
});

app.get("/sil/:rank/:id", (req, res) => {
  if (req.user) {
    let member = client.guilds.cache
      .get(IDler.sunucuID)
      .members.cache.get(req.user.id);
    if (!member) {
      res.redirect(
        url.format({
          pathname: "/hata",
          query: {
            statuscode: 502,
            message: "Bu Sayfayı Görmek İçin Gerekli Yetkiye Sahip Değilsiniz"
          }
        })
      );
    } else {
      if (
        member.roles.cache.has(IDler.kurucurol)
      ) {
        let id = req.params.id;
        if (!id) {
          res.redirect(
            url.format({
              pathname: "/hata",
              query: {
                statuscode: 504,
                message: "Bir Kod İd'si Belirtin"
              }
            })
          );
        }
        let rank = req.params.rank;
        if (!rank) {
          res.redirect(
            url.format({
              pathname: "/hata",
              query: {
                statuscode: 504,
                message: "Bir kod rankı'si belirtin"
              }
            })
          );
        }

        var rawId = findCodeToId(db[rank].get("kodlar"), id);
        if (!rawId)
          res.redirect(
            url.format({
              pathname: "/hata",
              query: {
                statuscode: 504,
                message: "Üzgünüm ancak böyle bir kod hiçbir zaman bulunmadı!"
              }
            })
          );
        else {
          if (req.user) db.api.add(`${req.user.id}.silinen`, 1);
          db[rank].delete("kodlar." + rawId.isim);
          res.redirect("/");
        }
      } else {
        res.redirect(
          url.format({
            pathname: "/hata",
            query: {
              statuscode: 502,
              message: "Bu sayfayı görmek için gerekli yetkiye sahip değilsiniz"
            }
          })
        );
      }
    }
  } else {
    res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 501,
          message: "Bu sayfayı görmek için giriş yapmalısınız"
        }
      })
    );
  }
});

app.get("/sss", (req, res) => {
  res.render("sss", {
    user: req.user
  });
});

app.get("/paylas", (req, res) => {
  if (
    !req.user ||
    !client.guilds.cache.get(IDler.sunucuID).members.cache.has(req.user.id)
  )
    return res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 138,
          message:
            "Kod paylaşabilmek için Discord sunucumuza katılmanız ve siteye giriş yapmanız gerekmektedir."
        }
      })
    );
  res.render("kod_paylas", {
    user: req.user
  });
});
app.post("/paylasim", (req, res) => {
  let guild = client.guilds.cache.get(IDler.sunucuID);
  let member = req.user ? guild.members.cache.get(req.user.id) : null;
  let rank = "topluluk";
  /*if (
    member &&
    IDler.kodPaylaşamayacakRoller.some(id => member.roles.cache.has(id))
  )
    return res.redirect(
      url.format({
        pathname: "/hata",
        query: {
          statuscode: 502,
          message: "Kod Paylaşma İznin Yok!"
        }
      })
    );*/
  if (
    member &&
    (member.roles.cache.has(IDler.kurucurol) ||
      member.roles.cache.has(IDler.kodPaylaşımcıRolü) ||
      member.roles.cache.has(IDler.yoneticirol))
  )
    rank = req.body.kod_rank;

  let auht = [];
  if (req.user) auht.push(req.user);
  let auth_arr = req.body.author.split(",");

  auth_arr.forEach(auth => {
    let user = client.users.cache.get(auth);
    auht.push(req.user);
  });

  let obj = {
    author: req.auth,
    isim: req.body.kod_adi,
    id: randomString({ length: 10 }),
    desc: req.body.desc,
    modules: req.body.modules.split(","),
    icon: req.user
      ? `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`
      : `https://cdn.discordapp.com/icons/${IDler.sunucuID}/a_830c2bcfa4f1529946e82f15441a1227.jpg`,
    main_code: req.body.main_code,
    komutlar_code: req.body.komutlar_code,
    kod_rank: rank,
    k_adi: req.user.username,
    date: new Date(Date.now()).toLocaleDateString()
  };
  if (req.user) db.api.add(`${req.user.id}.paylasilan`, 1);
  db[obj.kod_rank].set(`kodlar.${obj.isim}`, obj);
  client.channels.cache.get(IDler.kodLogKanalı).send(
    new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter(client.guilds.cache.get(IDler.sunucuID).name, client.guilds.cache.get(IDler.sunucuID).iconURL({ dynamic: true, size: 2048}))
    .setTimestamp()
    .setAuthor("Bir Kod Paylaşıldı!",client.user.avatarURL)
    .addField("Kod Bilgileri",`**Adı:** ${obj.isim} \n**Açıklaması:** ${obj.desc} \n**Değeri:** ${obj.kod_rank} \n**Paylaşan:** ${obj.k_adi}`)
    .addField("Kod Sayfası", `[Tıkla!](http://code.discordludex.ga/${obj.kod_rank}/${obj.id})`));
  res.redirect(`/${obj.kod_rank}/${obj.id}`);
});

function findCodeToId(data, id) {
  var keys = Object.keys(data);
  keys = keys.filter(key => data[key].id == id)[0];
  keys = data[keys];
  return keys;
}

function sortData(object) {
  var keys = Object.keys(object);
  var newData = {};
  var arr = [];
  keys.forEach(key => {// sup pothc :)
    arr.push(key);
  });
  arr.reverse();
  arr.forEach(key => {
    newData[key] = object[key];
  })
  return newData;
}

app.get("/hata", (req, res) => {
  res.render("hata", {
    user: req.user,
    statuscode: req.query.statuscode,
    message: req.query.message
  });
});

app.use((req, res) => {
  const err = new Error("Not Found");
  err.status = 404;
  return res.redirect(
    url.format({
      pathname: "/hata",
      query: {
        statuscode: 404,
        message: "Sayfa Bulunamadı"
      }
    })
  );
});

client.login(IDler.botToken);

client.on("ready", () => {
  const listener = app.listen(process.env.PORT, function() {
    console.log("Proje Hazır!");
  });
});
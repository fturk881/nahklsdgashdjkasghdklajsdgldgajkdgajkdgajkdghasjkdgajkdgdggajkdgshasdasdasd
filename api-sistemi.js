const superagent = require('superagent');
const fetch = require('node-fetch');
class Animals {
    constructor() {
        this.methods = [
            "bird",
            "bunny",
            "cat",
            "dog",
            "fox",
            "koala",
            "panda",
            "shiba",
          "bitegif",
          "blushgif",
          "crygif",
          "cuddlegif",
          "dancegif",
          "feedgif",
          "fluffgif",
          "holoimg",
          "huggif",
          "kissgif",
          "kitsuneimg",
          "lickgif",
          "okamiimg",
          "patgif",
          "pokegif",
          "senkoimg",
          "slapgif",
          "smilegif",
          "tailgif",
          "ticklegif",
          
          
          
          
          
          
        ];
    };

  
      async bitegif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/bite/gif")
        return body.link;
    };
      async blushgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/blush/gif")
        return body.link;
    };
      async crygif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/cry/gif")
        return body.link;
    };
      async cuddlegif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/cuddle/gif")
        return body.link;
    };
      async dancegif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/dance/gif")
        return body.link;
    };
        async feedgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/feed/gif")
        return body.link;
    };
          async fluffgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/fluff/gif")
        return body.link;
    };
            async holoimg() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/holo/img")
        return body.link;
    };
              async huggif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/hug/gif")
        return body.link;
    };
                async kissgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/kiss/gif")
        return body.link;
    };
                  async kitsuneimg() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/kitsune/img")
        return body.link;
    };
    
                    async lickgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/lick/gif")
        return body.link;
    };
    
                      async okamiimg() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/okami/img")
        return body.link;
    };
  
                        async patgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/pat/gif")
        return body.link;
    };
                          async pokegif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/poke/gif")
        return body.link;
    };
                            async senkoimg() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/senko/img")
        return body.link;
    };
  
                              async slapgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/slap/gif")
        return body.link;
    };
                                async smilegif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/smile/gif")
        return body.link;
    };
                                  async tailgif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/tail/gif")
        return body.link;
    };
                                    async ticklegif() {
        const { body } = await superagent.get("https://purrbot.site/api/img/sfw/tickle/gif")
        return body.link;
    };
  
  
  
  
  
  
  
  
  
  
  
  
  
    async bunny() {
        const { body } = await superagent.get("https://api.bunnies.io/v2/loop/random/?media=gif,png");
        return body.media.poster;
    };

    async cat() {
        const { body } = await superagent.get("https://aws.random.cat/meow?ref=apilist.fun");
        return body.file;
    };

    async dog() {
        const { body } = await superagent.get("https://dog.ceo/api/breeds/image/random");
        return body.message;
    };

    async fox() {
        const { body } = await superagent.get("https://randomfox.ca/floof/")
        return body.image;
    };

    async koala() {
        const { body } = await superagent.get("https://some-random-api.ml/img/koala")
        return body.link;
    };

    async panda() {
        const { body } = await superagent.get("https://some-random-api.ml/img/panda");
        return body.link;
    };

    async shiba() {
        const { body } = await superagent.get("https://shibe.online/api/shibes")
        return body[0]
    }

    async bird() {
        const res = await fetch("https://some-random-api.ml/img/birb", { method: "GET" });
        const response = await (res.json())
        return response.link
    };


}

module.exports = Animals
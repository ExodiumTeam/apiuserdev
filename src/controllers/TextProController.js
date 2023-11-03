const logHandler = require('../settings/settings')
const request = require('request')
const TextPro = require('textprome-scraper')

const textPro = new TextPro()

class TextProController {
  
  async alien(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/online-3d-alien-text-effect-generator-1146.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async realisticMoss(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-realistic-3d-moss-text-effects-online-1145.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async shinyblack(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/shiny-black-3d-text-effect-generator-1143.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async shadow(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-a-gradient-text-shadow-effect-online-1141.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async bigsale(req, res) {
    const text1 = req.query.text1
    const text2 = req.query.text2
    if (!text1 || !text2) return res.json({ status: false, message: 'insert text1 and text2 parameter' })
    textPro.double_text_create('https://textpro.me/sale-promotion-ads-3d-text-effect-1136.html', text1, text2)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async pokemon(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async neonlight(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/neon-light-style-3d-text-effect-online-1132.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async naruto(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/generate-naruto-logo-style-text-effect-online-1125.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async cartoon(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-3d-cartoon-text-effect-online-1120.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async liquid(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-3d-liquid-metal-text-effect-1112.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async cage(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-cage-text-effect-online-1110.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async metal(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-3d-metallic-text-with-details-online-1108.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async party(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async bornblackpink(req, res) {
    const text1 = req.query.text1
    const text2 = req.query.text2
    if (!text1 || !text2) return res.json({ status: false, message: 'insert text1 and text2 parameter' })
    textPro.double_text_create('https://textpro.me/create-blackpink-s-born-pink-album-theme-logo-online-1092.html', text1, text2)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async typography(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-artistic-typography-online-1086.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async neon(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async blackpink2(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async sliced(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async batman(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/make-a-batman-logo-online-free-1066.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async neon2(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-neon-light-on-brick-wall-online-1062.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async black2(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async demon(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-green-horror-style-text-effect-online-1036.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async magma(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async neon3(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async glitch(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async devil(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async blackpink3(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-blackpink-logo-style-online-1001.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async glitch2(req, res) {
    const text1 = req.query.text1
    const text2 = req.query.text2
    if (!text1 || !text2) return res.json({ status: false, message: 'insert text1 and text2 parameter' })
    textPro.double_text_create('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', text1, text2)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async neon4(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async pornhub(req, res) {
    const text1 = req.query.text1
    const text2 = req.query.text2
    if (!text1 || !text2) return res.json({ status: false, message: 'insert text1 and text2 parameter' })
    textPro.double_text_create('https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html', text1, text2)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async marvel(req, res) {
    const text1 = req.query.text1
    const text2 = req.query.text2
    if (!text1 || !text2) return res.json({ status: false, message: 'insert text1 and text2 parameter' })
    textPro.double_text_create('https://textpro.me/create-logo-style-marvel-studios-online-971.html', text1, text2)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async matrix(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/matrix-style-text-effect-online-884.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async thunder(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/create-thunder-text-effect-online-881.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async neon5(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/neon-text-effect-online-879.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async roadwarning(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/road-warning-text-effect-878.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async bokeh(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/bokeh-text-effect-876.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async glow(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/free-advanced-glow-text-effect-873.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async breakwall(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/break-wall-text-effect-871.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

  async ice(req, res) {
    const text = req.query.text
    if (!text) return res.json({ status: false, message: 'insert text parameter' })
    textPro.one_text_create('https://textpro.me/ice-cold-text-effect-862.html', text)
      .then(data => {
        request.get(data.url).on('response', response => {
          if (response.headers['content-type'].startsWith('image/')) {
            res.setHeader('Content-Type', response.headers['content-type'])
          } else { res.json({ message: 'Image not found!' }) }
        }).pipe(res)
      }).catch((e) => { res.json(logHandler.error); console.log(e) })
  }

}

module.exports = { TextProController }
const { Router } = require('express')
const { DownloadController } = require('../controllers/DownloadController')
const { TextProController } = require('../controllers/TextProController')
const { SearchController } = require('../controllers/SearchController')

const router = Router()
const downloadController = new DownloadController()
const textProController = new TextProController()
const searchController = new SearchController()

router.use((req, res, next) => {
  const apikey = req.query.apikey

  if (!apikey) {
    return res.json({
      status: false,
      message: 'Insert apikey parameter'
    })
  }

  if (apikey !== 'userdev') {
    return res.json({
      status: false,
      message: 'Invalid apikey'
    })
  }

  next()
})

// Downloads
router.route('/api/downloader/ytplay').get(downloadController.ytplay)
router.route('/api/downloader/ytmp3').get(downloadController.ytmp3)
router.route('/api/downloader/ytmp4').get(downloadController.ytmp4)
router.route('/api/downloader/fbdown').get(downloadController.fbdonw)
router.route('/api/downloader/twitter').get(downloadController.twitter)
router.route('/api/downloader/tiktok').get(downloadController.tiktok)
router.route('/api/downloader/igstory').get(downloadController.igstory)
router.route('/api/downloader/igdown').get(downloadController.igDownloader)
router.route('/api/downloader/mediafiredl').get(downloadController.mediafiredl)
router.route('/api/downloader/soundclouddl').get(downloadController.soundclouddl)

// textpro
router.route('/api/textpro/alien').get(textProController.alien)
router.route('/api/textpro/rmoss').get(textProController.realisticMoss)
router.route('/api/textpro/shinyblack').get(textProController.shinyblack)
router.route('/api/textpro/shadow').get(textProController.shadow)
router.route('/api/textpro/bigsale').get(textProController.bigsale)
router.route('/api/textpro/pokemon').get(textProController.pokemon)
router.route('/api/textpro/neonlight').get(textProController.neonlight)
router.route('/api/textpro/naruto').get(textProController.naruto)
router.route('/api/textpro/cartoon').get(textProController.cartoon)
router.route('/api/textpro/liquid').get(textProController.liquid)
router.route('/api/textpro/cage').get(textProController.cage)
router.route('/api/textpro/metal').get(textProController.metal)
router.route('/api/textpro/party').get(textProController.party)
router.route('/api/textpro/bornblackpink').get(textProController.bornblackpink)
router.route('/api/textpro/typography').get(textProController.typography)
router.route('/api/textpro/neon').get(textProController.neon)
router.route('/api/textpro/blackpink2').get(textProController.blackpink2)
router.route('/api/textpro/sliced').get(textProController.sliced)
router.route('/api/textpro/batman').get(textProController.batman)
router.route('/api/textpro/neon2').get(textProController.neon2)
router.route('/api/textpro/black2').get(textProController.black2)
router.route('/api/textpro/demon').get(textProController.demon)
router.route('/api/textpro/magma').get(textProController.magma)
router.route('/api/textpro/neon3').get(textProController.neon3)
router.route('/api/textpro/glitch').get(textProController.glitch)
router.route('/api/textpro/devil').get(textProController.devil)
router.route('/api/textpro/blackpink3').get(textProController.blackpink3)
router.route('/api/textpro/glitch2').get(textProController.glitch2)
router.route('/api/textpro/neon4').get(textProController.neon4)
router.route('/api/textpro/pornhub').get(textProController.pornhub)
router.route('/api/textpro/marvel').get(textProController.marvel)
router.route('/api/textpro/matrix').get(textProController.matrix)
router.route('/api/textpro/thunder').get(textProController.thunder)
router.route('/api/textpro/neon5').get(textProController.neon5)
router.route('/api/textpro/roadwarning').get(textProController.roadwarning)
router.route('/api/textpro/bokeh').get(textProController.bokeh)
router.route('/api/textpro/glow').get(textProController.glow)
router.route('/api/textpro/breakwall').get(textProController.breakwall)
router.route('/api/textpro/ice').get(textProController.ice)

// search
router.route('/api/search/pinterest').get(searchController.pinterest)
router.route('/api/search/wikipedia').get(searchController.wikipedia)
router.route('/api/search/google').get(searchController.google)
router.route('/api/search/googleimage').get(searchController.googleImageSearch)
router.route('/api/search/sticker').get(searchController.sticker)

module.exports = { router }
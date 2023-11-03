const user = require('../lib/listdl')
const yts = require('yt-search')
const loghandler = require('../settings/settings')
const { ytMp3, ytMp4 } = require('../lib/y2mate')

class DownloadController {

  async ytplay(req, res) {
    const query = req.query.query
    if (!query) return res.json({ status: false, message: 'insert query paramenter' })
    const search = await yts(query)
    const url = search.all[0]
    const mp3 = await ytMp3(url.url)
    const mp4 = await ytMp4(url.url)
    if (!mp3 || !mp4) return res.json(loghandler.noturl)
    res.json({
      status: true,
      result: {
        title: mp4.title,
        desc: mp4.desc,
        thumb: mp4.thumb,
        views: mp4.views,
        channel: mp4.channel,
        ago: mp4.ago,
        timestamp: url.timestamp,
        uploadDate: mp4.uploadDate,
        author: url.author,
        mp4: {
          result: mp4.result,
          size: mp4.size,
          quality: mp4.quality
        },
        mp3: {
          result: mp3.result,
          size: mp3.size
        }
      }
    })
  }

  async ytmp3(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter ' })
    const mp3 = await ytMp3(url)
    const mp4 = await ytMp4(url)
    if (!mp3 || !mp4) return res.json(loghandler.noturl)
    res.json({
      status: true,
      result: {
        link: mp3.result,
        size: mp3.size,
        title: mp4.title,
        desc: mp4.desc,
        thumb: mp4.thumb,
        views: mp4.views,
        channel: mp4.channel,
        uploadDate: mp4.uploadDate
      }
    })
  }

  async ytmp4(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter ' })
    const mp4 = await ytMp4(url)
    if (!mp4) return res.json(loghandler.noturl)
    res.json({
      status: true,
      result: {
        link: mp4.result,
        size: mp4.size,
        title: mp4.title,
        desc: mp4.desc,
        thumb: mp4.thumb,
        views: mp4.views,
        channel: mp4.channel,
        uploadDate: mp4.uploadDate
      }
    })
  }

  async fbdonw(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter' })
    user.fbdown(url).then(data => {
      if (!data.Normal_video) return res.json(loghandler.noturl)
      res.json({ status: true, result: data })
    }).catch(() => { res.json(loghandler.error) })
  }

  async twitter(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter' })
    user.twitter(url).then(data => {
      if (!data.video) return res.json(loghandler.noturl)
      res.json({ status: true, result: data })
    }).catch(() => { res.json(loghandler.error) })
  }

  async tiktok(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter' })
    user.musically(url).then(data => {
      if (!data) return res.json(loghandler.noturl)
      res.json({ status: true, result: data })
    }).catch(() => { res.json(loghandler.error) })
  }

  async igstory(req, res) {
    const username = req.query.username
    if (!username) return res.json({ status: false, message: 'insert username parameter' })
    user.igstory(username).then(data => {
      if (!data) return res.json(loghandler.noturl)
      res.json({ status: true, result: data })
    }).catch(() => { res.json(loghandler.error) })
  }

  async igDownloader(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter' })
    if (!/^((https|http)?:\/\/(?:www\.)?instagram\.com\/(p|tv|reel|stories)\/([^/?#&]+)).*/i.test(url)) {
      return res.json(loghandler.noturl)
    }
    user.igdl(url).then(data => {
      if (!data) return res.json(loghandler.instgram)
      res.json({ status: true, result: data })
    }).catch(() => { res.json(loghandler.error) })
  }

  async mediafiredl(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter' })
    user.mediafiredl(url).then(data => {
      if (!data) return res.json(loghandler.noturl)
      res.json({ status: true, result: data })
    }).catch(() => { res.json(loghandler.error) })
  }

  async soundclouddl(req, res) {
    const url = req.query.url
    if (!url) return res.json({ status: false, message: 'insert url parameter' })
    user.soundcloud(url).then(data => {
      if (!data) return res.json(loghandler.noturl)
      res.json({ status: true, result: data })
    }).catch(() => { res.json(loghandler.error) })
  }

}

module.exports = { DownloadController }
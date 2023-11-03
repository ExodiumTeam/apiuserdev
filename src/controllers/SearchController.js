const user = require('../lib/listdl')
const logHandle = require('../settings/settings')
const googleIt = require('google-it')
const googleImageSearch = require('g-i-s')

class SearchController {

  async pinterest(req, res) {
    const name = req.query.name
    if (!name) return res.json({ status: false, message: 'Insert name paramenter' })
    try {
      user.pinterest(name).then(data => {
        if (!data[0]) return res.json(logHandle.notfound)
        res.json({ status: true, result: data })
      })
    } catch (e) {
      res.json(logHandle.error)
    }
  }

  async wikipedia(req, res) {
    const query = req.query.query
    if (!query) return res.json({ status: false, message: 'Insert query paramenter' })
    try {
      user.wikimedia(query).then(data => {
        if (!data[0]) return res.json(logHandle.notfound)
        res.json({ status: true, result: data })
      })
    } catch (e) {
      res.json(logHandle.error)
    }
  }

  async google(req, res) {
    const query = req.query.query
    if (!query) return res.json({ status: false, message: 'Insert query paramenter' })
    try {
      googleIt({ query }).then(data => {
        if (!data[0]) return res.json(logHandle.notfound)
        res.json({ status: true, result: data })
      })
    } catch (e) {
      res.json(logHandle.error)
    }
  }

  async googleImageSearch(req, res) {
    const query = req.query.query
    if (!query) return res.json({ status: false, message: 'Insert query paramenter' })
    try {
      googleImageSearch(query, (_error, data) => {
        if (!data) return res.json(logHandle.notfound)
        res.json({ status: true, result: data })
      })
    } catch (e) {
      res.json(logHandle.error)
    }
  }

  async sticker(req, res) {
    const query = req.query.query
    if (!query) return res.json({ status: false, message: 'Insert query paramenter' })
    try {
      user.stickersearch(query).then((data) => {
        if (!data) return res.json(logHandle.notfound)
        res.json({ status: true, result: data })
      })
    } catch (e) {
      res.json(logHandle.error)
    }
  }

}

module.exports = { SearchController }
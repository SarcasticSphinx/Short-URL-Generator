const url_model = require('../models/url')
const shortid = require('shortid')

async function handleGenerateShortURL(req, res) {
    const body = req.body
    if(!body.url){
        res.status(400).json({
            error: "Url is required"
        })
    }
    const shortID = shortid.generate()
    await url_model.create({
        short_URL: shortID,
        redirect_url: body.url,
        visited_history: []
    })

    return res.status(201).json({
        message: "short url generated",
        short_url: shortID 
    })    
}


module.exports = {
    handleGenerateShortURL
}
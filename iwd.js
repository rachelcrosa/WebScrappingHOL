const request = require('request-promise')
const cheerio = require('cheerio')
const moment = require('moment')


const executeScraper = async() => {
    const body = await request.get('https://iwd.gdgmalaga.dev/')
    const $ = cheerio.load(body)

    const title = $('title').text()
    const location = $('.wtm-full-screen-card-container h5').text().trim()
    const dateString = $('.wtm-full-screen-card-container h4').text().trim()
    const date = moment(dateString, 'dddd, MMMM, Do').format('DD-MM-YYYY')
    const tickets = $('.wtm-full-screen-card-container a:nth-child(1)').attr('href')
    const program = getProgram($, body)
    console.log(tickets)
}
const getProgram = ($, body, date) => {
    const talks = $('.wtm-container.hoverable', body).toArray()
    const program = []
    talks.forEach(talk => {
        const title = $(talk).find('.wtm-program-title').text().trim().replace(/\n\s*/, '')
        const dateString = $('.wtm-program-hour').text()
        const date = moment.utc(`$(day} ${dateString}`, 'DD-MM-YYYY H:mm').toISOString()
        console.log(date)
        program.push({title, date})
    })

    return program
}

executeScraper()
const request = require('request-promise')

const executeScraper = async() => {
    const body = await request.get('https://en.wikipedia.org/wiki/Catshark')
    const pattern= /title>(.*?)</
    const result= pattern.exec(body) 
    const title=result && result[1] ? result[1] : 'Not found'
    console.log(result(1))
}

executeScraper()
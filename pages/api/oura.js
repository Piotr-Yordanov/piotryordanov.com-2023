
var oura = require('oura')
var dayjs = require('dayjs')

// assume you have already gotten an OAuth2 access token
var accessToken = '5G3ABFVGRDTX4V2A2KDP6LTMADDHB44V'

var client = new oura.Client(accessToken)
client.personalInfo().then(function (user) {
    console.log(JSON.stringify(user, null, 1))
}).catch(function (error) {
    console.error(error)
})

const dateFormat = 'YYYY-MM-DD'
let start = dayjs().subtract(30, 'days').format(dateFormat)
let end = dayjs().format(dateFormat)

export default (req, res) => {
    client.sleep(start, end).then(function (sleep) {
        console.log(JSON.stringify(sleep));
        res.json(sleep)
    }).catch(function (error) {
        console.error(error)
    })
}

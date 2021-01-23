var axios = require('axios'),
moment = require('moment'),
events = [];
module.exports = async () => {
var data = await axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`)
data.data.events.map(event => events.push({title:event.title , at:moment(event.geometries[0].date).format("DD MMMM YYYY") }))
return events
}
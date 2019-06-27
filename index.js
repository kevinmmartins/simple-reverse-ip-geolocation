const geoip = require('geo-from-ip');
const iplocation = require("iplocation").default;
const geoipLite = require('geoip-lite');
const NodeGeocoder = require('node-geocoder');

const ip= '186.192.87.8'

console.log('Geo IP');
geoData=geoip.allData(ip);
console.log(geoData);
iplocation(ip)
    .then((res) => {
	console.log('Ip location');
	console.log(res);
    })
    .catch(err => {
	console.log("Do something")
    });
console.log('Geo IP lite');
console.log(geoipLite.lookup(ip));


 
const options = {
  provider: 'openstreetmap',
};
 
const geocoder = NodeGeocoder(options);

geocoder.reverse({lat:geoData.location.latitude, lon:geoData.location.longitude})
  .then((res)=> {
    console.log('Geocoder');
    console.log(res);
  })
  .catch((err) => {
    console.log("Do something")
  });

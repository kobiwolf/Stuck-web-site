const axios = require('axios');
const Address = require('../model/Address');
require('dotenv').config();
const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API}&address=`;
const getLocation = async (place) => {
  const paramsEncoded = encodeURI(
    `${place.number} ${place.street} ${place.city}`
  );
  const path = `${url}${paramsEncoded}`;
  try {
    let { data } = await axios.get(path);
    data = data.results[0];
    const gpsCoors = data.geometry.location;
    const id = data.place_id;
    place.gps = {};
    place.gps.lat = gpsCoors.lat;
    place.gps.long = gpsCoors.lng;
    place.id = id;
    const address = await new Address(place);
    await address.save();
    return { id, gps: place.gps, city: place.city };
  } catch (e) {
    throw new Error(e);
  }
};
module.exports = getLocation;

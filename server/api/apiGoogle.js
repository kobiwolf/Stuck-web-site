const axios = require('axios');
const Address = require('../model/Address');
require('dotenv').config();
const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API}&address=`;
const getLocation = async (place) => {
  try {
    const { data } = await axios.get(
      `${url}${place.city} ${place.street} ${place.number}`
    );
    const gpsCoors = data.address_components.geometry.location;
    const id = data.address_components.place_id;
    place.Gps.lat = gpsCoors.lat;
    place.Gps.long = gpsCoors.long;
    place._id = id;
    const address = await new Address(place);
    await address.save();
    return address;
  } catch (e) {
    throw new Error(e);
  }
};
module.exports = getLocation;

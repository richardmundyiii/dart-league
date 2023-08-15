const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sponsorImageSchema = new Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String
  }
})

module.exports = mongoose.model('SponsorImage', sponsorImageSchema)
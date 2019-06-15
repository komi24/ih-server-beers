const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BeerSchema = new Schema({
  image: String,
  name: String,
  tagline: String,
  first_brewed: String,
  attenuation_level: String,
  description: String,
  contributed_by: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Beer = mongoose.model('Beer', BeerSchema);
module.exports = Beer;
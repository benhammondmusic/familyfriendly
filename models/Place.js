const mongoose = require('mongoose');

// - report cards [refs]
// display name
// - potty score
// - change table W
// - change table M
// - freshness score
// - num num score
// - coffee score
// - masked up score
// geo location

// * https://mongoosejs.com/docs/geojson.html
const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Place', placeSchema);

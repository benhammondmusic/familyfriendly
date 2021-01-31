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
    authorUserId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    loc: {
      type: { type: String },
      coordinates: [Number],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Place', placeSchema);

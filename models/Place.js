const mongoose = require('mongoose');

// * https://mongoosejs.com/docs/geojson.html
const placeSchema = new mongoose.Schema(
  {
    authorUserId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    reportcards: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Reportcard',
      },
    ],
    name: {
      type: String,
      required: true,
    },
    loc: {
      type: { type: String },
      coordinates: [Number],
    },
    // hasPottyScore: { type: Number, min: 0, max: 100 },
    hasChangingTableWScore: { type: Number, min: 0, max: 100 },
    hasChangingTableMScore: { type: Number, min: 0, max: 100 },
    // isCleanScore: { type: Number, min: 0, max: 100 },
    // hasSnacksScore: { type: Number, min: 0, max: 100 },
    // hasCoffeeScore: { type: Number, min: 0, max: 100 },
    // kidsCanRunAroundScore: { type: Number, min: 0, max: 100 },
    // everyoneMaskedScore: { type: Number, min: 0, max: 100 },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Place', placeSchema);

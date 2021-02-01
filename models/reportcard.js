const mongoose = require('mongoose');

const reportCardSchema = new mongoose.Schema(
  {
    authorUserId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    place: {
      type: mongoose.Types.ObjectId,
      ref: 'Place',
    },
    hasPotty: Boolean,
    hasChangingTableW: Boolean,
    hasChangingTableM: Boolean,
    isClean: Boolean,
    hasSnacks: Boolean,
    hasCoffee: Boolean,
    kidsCanRunAround: Boolean,
    everyoneMasked: Boolean,
    comment: String,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('ReportCard', reportCardSchema);

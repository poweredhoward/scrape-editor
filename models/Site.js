const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SiteSchema = new Schema({
    url: {
        type: String
    },
    content: {
        type: String
    }
});

const Site = mongoose.model("Site", SiteSchema);

module.exports = Site;
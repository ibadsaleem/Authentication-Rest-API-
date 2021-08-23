const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    email: { type: String },
    password: { type: String }
})

const authModel = mongoose.model("AuthSchema", authSchema);

module.exports = authModel;




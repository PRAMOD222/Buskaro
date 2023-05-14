const mongoose = require('mongoose');

const routesSchema = new mongoose.Schema({
    aroute : {type: String, required: true, unique: true},
    subroutes : []
  }, {timestamps : true});

  mongoose.models = {}
  export default mongoose.model("routes", routesSchema);
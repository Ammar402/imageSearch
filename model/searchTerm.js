//Requirement for mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//model
const searchTermSchema = new Schema({
  searchVal : String,
  searchDate : Date
},
                                    {
}
                                    
);
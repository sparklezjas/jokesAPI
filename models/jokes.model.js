const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    joke: String,
    punchline: String,
}, {timestamps: true});
   
const Joke = mongoose.model('joke', JokeSchema);
 
module.exports = Joke;

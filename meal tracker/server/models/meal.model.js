const mongoose = require('mongoose')

const MealSchema = mongoose.Schema({
  title: {
    type:String,
    required: [true, 'Please enter the name of your meal']
  },
  calories: {
    type:Number,
    required: [true, 'please enter the amount of calories']
  },
  PostedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  instructions:{
    type:String,
    required: [true, 'please list instructions or ingredients']
  },
},{timestamps:true})

module.exports = mongoose.model("Meals", MealSchema)
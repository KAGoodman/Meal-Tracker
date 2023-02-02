const Meal = require('../models/meal.model')

module.exports = {
  createMeal: (req,res)=>{
    Meal.create(req.body)
    .then((result) =>{
      res.json(result)
    }).catch((err)=>{
      console.log(err)
    })
  },

  getAllMeals: (req,res)=>{
    Meal.find()
    .then((result)=>{
      res.json(result)
    }).catch((err)=>{
      console.log(err)
    })
  },

  getOneMeal: (req,res)=>{
    Meal.findById(req.params.id)
    .then((result)=>{
      res.json(result)
    }).catch((err)=>{
      console.log(err)
    })
  },

  updateMeal: (req,res)=>{
    Meal.updateOne({_id:req.params.id}, req.body)
    .then((result)=>{
      res.json(result)
    }).catch((err)=>{
      console.log(err)
    })
  },

  deleteMeal: (req,res)=>{
    Meal.deleteOne({_id:req.params.id})
    .then((result)=>{
      res.json(result)
    }).catch((err)=>{
      console.log(err)
    })
  },
}
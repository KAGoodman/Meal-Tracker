const MealController = require('../controllers/meals.controller')

module.exports = (app) => {
  app.post('/api/createMeal',MealController.createMeal)
  app.get('/api/getallMeals',MealController.getAllMeals)
  app.get('/api/oneMeal/:id',MealController.getOneMeal)
  app.put('/api/UpdateMeal/:id',MealController.updateMeal)
  app.delete('/api/deleteMeal/:id',MealController.deleteMeal)
}
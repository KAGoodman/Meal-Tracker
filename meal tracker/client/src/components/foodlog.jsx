import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const OneMeal = () => {

  const [Meal, setMeal] = useState({})

  const {id} = useParams()

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/oneMeal/${id}`)
      .then((res)=>{
        setMeal(res.data)
        console.log(res.data._id)
      }).catch((err)=> {
        console.log(err)
      });
    },[]);

    const navigate = useNavigate()

    const deleteone = (e) => {
      e.preventDefault();
      axios
        .delete(`http://localhost:8000/api/deleteMeal/${id}`, {
        }, { withCredentials: true })
        .then((res) => {
          console.log(res);
          navigate('/meals')
        })
        .catch((err) => {
          console.log(err)
        });
    };

    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [instructions, setinstruction] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .put(`http://localhost:8000/api/UpdateMeal/${id}`, {
          title,
          calories,
          instructions,
        }, { withCredentials: true })
        .then((res) => {
          console.log(res);
          navigate(`/meals`)
        })
        .catch((err) => {
          console.log(err)
        });
    };
    

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Title: <input onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
                type="text" 
                placeholder={Meal.title}/>
          </h1>
          <h2>Calories: <input onChange={(e) => setCalories(e.target.value)}
                value={calories}
                name="calories"
                type="Number"
                placeholder={Meal.calories}/>
          </h2>
          <h3>Instructions: <textarea rows="5" onChange={(e) => setinstruction(e.target.value)}
                value={instructions}
                name="instructions"
                type="text"
                placeholder={Meal.instructions}/>
          </h3>
        <button type='submit'>Update</button>
        </form>
      </div>
      <div>
        <button onClick={deleteone}>Delete</button>
      </div>
    </div>
    
  )
}

export default OneMeal
import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../App.css";

const AllMeals = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [instructions, setinstruction] = useState("");
  const [allmeals, setAllMeals] = useState([]);
  const [errors, setErrors] = useState({})

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/createMeal", {
        title,
        calories,
        instructions,
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate(`/meals/${res.data._id}`)
      })
      .catch((err) => {
        console.log(err)
        setErrors(err)
      });
  };

  const submithandler = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/api/logout", {
      }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate('/Login')
      })
      .catch((err) => {
        console.log(err)
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getallMeals")
      .then((response) => {
        console.log(response.data);
        setAllMeals(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

return (
  <div className="container-fluid">
        <div className="col-12 d-flex justify-content-end ">
    <form onSubmit={submithandler}>
    <button className="btn btn-dark" type="submit" >Logout</button>
    </form>
    <div>
    </div>
    </div>
    <div className="d-flex">
      <form onSubmit={handleSubmit} className="form col-4">
      <h1>Add a Meal</h1>
            <div>
              <label className="form-label mt-5">Title:
              <input className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
                type="text"
              />
              </label>
            </div>

            <div>
              <label className="form-label mt-3">Calories: 
              <input className="form-control"
                onChange={(e) => setCalories(e.target.value)}
                value={calories}
                name="calories"
                type="Number"
              />
              </label>
            </div>

            <div className="form-outline">
              <label className="form-label mt-3" htmlfor="textAreaExample">instructions: 
              <textarea className="form-control" rows='4'
                onChange={(e) => setinstruction(e.target.value)}
                value={instructions}
                name="instructions"
                type="text"
              />
              </label>
            </div>

        <button className="form-button mt-5">Add Meal</button>
      </form>
      <div className="form col-5">
        <h1>All Meals:</h1>
        <div className="d-inline-flex justify-content-around flex-column">
          <thead>
            <tr>
              <th>Title:</th>
              <th>calories:</th>
            </tr>
          </thead>
          <tbody>
            {allmeals.map((meal, index) => {
              return(
                <tr key={meal._id}>
                  <td><Link to={`/meals/${meal._id}`}>{meal.title}</Link></td>
                  <td className="ml-auto p-1">{meal.calories}</td>
                </tr>
              )
            })}
          </tbody>
        </div>
      </div>
    </div>

  </div>
  

)

}

export default AllMeals
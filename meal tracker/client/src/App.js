import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/register";
import AllMeals from "./components/userpage";
import Login from "./components/login";
import OneMeal from "./components/foodlog"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterForm/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/meals" element={<AllMeals />} />
          <Route path="/meals/:id" element={<OneMeal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
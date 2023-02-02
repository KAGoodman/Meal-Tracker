import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const submithandler = (e) => {
      e.preventDefault()
      axios.post("http://localhost:8000/api/login",{
        Email,
        password
      },{withCredentials:true})
      .then((res)=>{
        console.log(res);
        navigate('/meals')
      }).catch((err)=>{
        console.log(err.response)
        setErrors(err.response.data.message)
      });
    };
  return(
    <div>
    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
    <li className="nav-item" role="presentation">
      <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="Login" role="tab"
        aria-controls="pills-login" aria-selected="true">Login</a>
    </li>
    <li className="nav-item" role="presentation">
      <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="/" role="tab"
        aria-controls="pills-register" aria-selected="false">Register</a>
    </li>
  </ul>
      <form onSubmit={submithandler} className="">
        <div>
          <h1>Login</h1>
        </div>
      <div className="form-label">
              <label className='form-label'>Email: 
              <input className="form-control"
                onChange={(e) =>setEmail(e.target.value)}
                name="Email"
                type="text"
              />
              </label>
            </div>

            <div className="form-label">
              <label className='form-label'>Password:
              <input className="form-control"
                onChange={(e) =>setPassword(e.target.value)}
                name="password"
                type="text"
              />
              </label>
            </div>
            {errors ? <p className="validations alert" style={{color: 'red'}}>{errors}</p> : null}
            <button className='btn btn-info mt-3'>Login</button>
      </form>
    </div>

  );
};

export default Login
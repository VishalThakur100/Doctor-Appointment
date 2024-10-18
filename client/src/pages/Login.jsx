
import { Form, Input,message } from "antd";
import "../styles/Registerstyle.css";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {showLoading,hideLoading} from "../redux/features/alertSlice"
import axios from "axios"


const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const FinishHandler =async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post("http://localhost:8000/api/v1/user/login",values)
      dispatch(hideLoading())
      if(response.data.success){
        localStorage.setItem("token",response.data.token)
        message.success("Login Successfully")
        navigate("/")
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
      message.error("Login failed. Please try again.")
      
    }
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={FinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Login Now</h1>

          <Form.Item label="Email" name="email">
            <Input type="email" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required></Input>
          </Form.Item>
          <Link to="/register" className="m-6">
            Not a user Register here
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;

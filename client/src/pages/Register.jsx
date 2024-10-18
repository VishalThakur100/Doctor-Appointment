
import { Form, Input, message } from "antd";
import "../styles/Registerstyle.css";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";


const Register = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const FinishHandler = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post('http://localhost:8000/api/v1/user/register',values);
      dispatch(hideLoading())
      if (response.data.success) {
        message.success(response.data.message);
        navigate("/login")
      }else{
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      message.error("Registration failed. Please try again.");
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
          <h1 className="text-center">Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required></Input>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required></Input>
          </Form.Item>
          <Link to="/login" className="m-2">
            Already a user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;

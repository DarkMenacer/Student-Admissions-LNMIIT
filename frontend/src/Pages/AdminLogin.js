import React, {useState, useRef} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Login - First Time/LoginStyles.css";
// import "./styles.css";

const AdminLogin = () => {

  const admin_password = useRef(null);
  const [authData, setAuthData] = useState({});
  let current_password;

  const navigate = useNavigate();

  const admin_home = "/admin/home";

  const fetchData = async (password) => {
    await fetch(`/adminLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAuthData(data);
        // console.log(authData);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    current_password = admin_password.current.value;
    console.log(current_password);
    await fetchData(current_password);

    
    console.log(authData.flag);
    if(authData.flag == true){
      navigate(admin_home);
    }else if(authData.flag == false){
      alert("Wrong Password!!");
    }

  }


  return (
    <div>
      <div className="login-title">Welcome to the Administrator Login</div>
      <div className="login-form">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Please Enter the Admin Password</Form.Label>
              <Form.Control
                required
                ref = {admin_password}
                size="lg"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button className="mb-3" size="lg" variant="danger" type="submit">
              Login
            </Button>
          </Form>
        </div>
    </div>
  );
};

export default AdminLogin;

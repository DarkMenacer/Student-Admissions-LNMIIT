import React from "react";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./AllotmentStyle.css";


const ApplicantHome = () => {
  const allotement = "/applicant/allotment";
  const home = "/";
  const navigate = useNavigate();
  const location = useLocation();
  const status = location.state.data[0].status;
  const pref_details = location.state.pref_details;
  const applicationId = location.state.id;

  console.log(location.state.pref_details);

  const handleClick = () => {
    if(status === 0 && pref_details.length === 0){
      alert("Sorry, but you're already out of the process");
      navigate(home)
    }else{
      navigate(allotement, { state: location.state });
    }
  };

  return (
    <>
      <h1 className="allotment_title m-3">Welcome to the Home Page</h1>
      <div className="allotment-container">
        <h3 className="allotment_title">
          Hello 23LNM{applicationId}
        </h3>
        <div>
          <Button
            className="m-3"
            size={"lg"}
            variant={"danger"}
            onClick={handleClick}
          >
            Go to Allotment Page
          </Button>
        </div>
        <div>
          <center>

          <Button
            className="m-3 details_btn"
            size={"lg"}
            variant={"danger"}
            onClick={handleClick}
          >
            My Details
          </Button>
          </center>
        </div>
      </div>
    </>
  );
};

export default ApplicantHome;

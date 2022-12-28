import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./AdminHome.css"

const AdminHome = () => {
  
  const [showResult, setShowResult] = useState([]);
  const [getResults, setGetResults] = useState(false);

  const fetchData = async () => {
    await fetch(`/administrator`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowResult([...showResult, data]);
      });
  };
  const resetFetch = async () => {
    await fetch(`/resetRequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
  };
  const handleRounds = async () => {
    console.log("Handle Rounds Function!");
    setGetResults(false);
    setShowResult([]);
    await fetchData();
  };

  const handleResults = () => {
    console.log("Handle Results Function!");
    // alert(showResult);
    setGetResults(true);
    console.log(showResult);
    // setShowResult([...showResult, results]);
  };

  const handleReset = async () => {
    console.log("Calling fetch for reset");
    setGetResults(false);
    setShowResult([]);
    await resetFetch();
  }

  return (
    <>
      <div className="parent_AdminHome">
          <h1 className="m-3 admin_heading">Welcome to the Admin Home Page</h1>
        <div className="content_AdminHome">

          <Button className="m-3" size="lg" variant="danger" onClick={handleRounds}>
            Simulate Rounds
          </Button>
          
          <Button className="m-3" size="lg" variant="danger" onClick={handleResults}>
            Show results
          </Button>
          <div>{
            getResults === true ? 
            <div>Results are - <br /> 
            <li>
              {showResult[showResult.length - 1].map((result, key) => {
                return (<ul key={key}>{result}</ul>)
              })}
            </li>
            </div>
            : "To display results, first click on Simulate Rounds and then Show Results"
          }</div>

        </div>
        <Button className="m-3" size="lg" variant="danger" onClick={handleReset}>
          Reset Data
        </Button>
      </div>
    </>
  );
};

export default AdminHome;

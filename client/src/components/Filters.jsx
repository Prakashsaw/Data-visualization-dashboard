import React from "react";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

// here we are returning a bootstrap dropdown and just a button
const Filters = ({ setMainData }) => {
  //function to call the getDataFromDB function and passing the 'year' to it entered by the user
  const handleSelect = (eventKey, event) => {
    getDataFromDB(event.target.innerText);
  };
  // func to fetch the filtered data by year and update the state
  const getDataFromDB = async (year) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/data/year/${year}`
      );
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  // func to handle the "reset filters button" by making another api call and update state
  const handleReset = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/data/all`);
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="tabsClass"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter By Year
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">2010</Dropdown.Item>
          <Dropdown.Item eventKey="2">2011</Dropdown.Item>
          <Dropdown.Item eventKey="3">2012</Dropdown.Item>
          <Dropdown.Item eventKey="4">2013</Dropdown.Item>
          <Dropdown.Item eventKey="5">2014</Dropdown.Item>
          <Dropdown.Item eventKey="6">2015</Dropdown.Item>
          <Dropdown.Item eventKey="7">2016</Dropdown.Item>
          <Dropdown.Item eventKey="7">2017</Dropdown.Item>
          <Dropdown.Item eventKey="7">2018</Dropdown.Item>
          <Dropdown.Item eventKey="7">2019</Dropdown.Item>
          <Dropdown.Item eventKey="7">2020</Dropdown.Item>
          <Dropdown.Item eventKey="7">2021</Dropdown.Item>
          <Dropdown.Item eventKey="7">2022</Dropdown.Item>
          <Dropdown.Item eventKey="7">2023</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button
        variant="danger"
        onClick={handleReset}
        style={{ marginLeft: "1vw", width: "10rem" }}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default Filters;

// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import EmployeeInfo from "../components/EmployeeInfo";
import EmployeeList from "../components/EmployeeList"
import Alert from "../components/Alert";

// class Discover extends Component {
function Employees() {
  // state = {
  //   employeeList: []
  // }
  const [employeeList, setEmployeeList ] = useState([]);

  useEffect( async () => {
    const result = await API.getRandomUsers();
    const finalList = await result.data.results
    setEmployeeList(finalList);
    // setRenderReady(true)
  }, [])

  // componentDidMount() {
  //   this.loadNextUser();
  // }
  // const loadNextUser = () => {
    //   API.getRandomUsers()
    //     // .then(res => console.log(res.data.results))
    //     .then(res => this.setState({employeeList: res.data.results}))
    //     .catch(err => console.log(err));
    // };

  // render() {
    return (
      <div>
        <h1 className="text-center">View Employees!</h1>
        <h3 className="text-center">
          Adjust search criteria to filter employees and click on categories to reverse display order
        </h3>
        <EmployeeList list={employeeList} />
      </div>
    );
  // }
}

export default Employees;

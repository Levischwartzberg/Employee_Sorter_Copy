// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import EmployeeInfo from "../components/EmployeeInfo";
import EmployeeList from "../components/EmployeeList"
import SearchForm from "../components/SearchForm";
// import Alert from "../components/Alert";

// class Discover extends Component {
function Employees() {
  // state = {
  //   employeeList: []
  // }
  const [employeeList, setEmployeeList ] = useState([]);
  const [ filteredList, setFilteredList ] = useState([]);
  const [search, setSearch] = useState("Name");

  useEffect( async () => {
    const result = await API.getRandomUsers();
    const finalList = await result.data.results
    setEmployeeList(finalList);
    setFilteredList(finalList);
    // setRenderReady(true)
  }, [])

  const handleInputChange = event => {
    setSearch(event.target.value);
    const search = event.target.value.toLowerCase();
    const filtered = employeeList.filter(
      employee => {
        return employee.name.first.toLowerCase().includes(search) || employee.name.last.toLowerCase().includes(search);
      }
    )
    // console.log(filtered);
    setFilteredList(filtered);
  };

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
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        <EmployeeList list={filteredList} />
      </div>
    );
  // }
}

export default Employees;

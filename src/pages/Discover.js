import React, { Component } from "react";
import API from "../utils/API";
import EmployeeInfo from "../components/EmployeeInfo";
import EmployeeList from "../components/EmployeeList"
import Alert from "../components/Alert";

class Discover extends Component {
  // state = {
  //   image: "",
  //   match: false,
  //   matchCount: 0
  // };
  state = {
    employeeList: []
  }

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextUser();
  }

  // handleBtnClick = event => {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;
  //   // Clone this.state to the newState object
  //   // We'll modify this object and use it to set our component's state
  //   const newState = { ...this.state };

  //   if (btnType === "pick") {
  //     // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
  //     newState.match = 1 === Math.floor(Math.random() * 5) + 1;

  //     // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  //     newState.matchCount = newState.match
  //       ? newState.matchCount + 1
  //       : newState.matchCount;
  //   } else {
  //     // If we thumbs down'ed the dog, we haven't matched with it
  //     newState.match = false;
  //   }
  //   // Replace our component's state with newState, load the next dog image
  //   this.setState(newState);
  //   this.loadNextUser();
  // };

  loadNextUser = () => {
    API.getRandomUsers()
      // .then(res => console.log(res.data.results))
      .then(res => this.setState({employeeList: res.data.results}))
      // .then(res =>
      //   this.setState({
      //     image: res.data.results.picture.large,
      //     firstName: res.data.results.name.first,
      //     lastName: res.data.results.name.last,
      //     email: res.data.results.email,
      //     phone: res.data.results.cell
      //   })
      // )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">View Employees!</h1>
        <h3 className="text-center">
          Adjust search criteria to filter employees and click on categories to reverse display order
        </h3>
        {/* <EmployeeInfo image={this.state.image} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} phone={this.state.phone} handleBtnClick={this.handleBtnClick} /> */}
        <EmployeeList list={this.state.employeeList} />
      </div>
    );
  }
}

export default Discover;

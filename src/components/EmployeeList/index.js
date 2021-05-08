import React from "react"
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const EmployeeList = (props) => {
  console.log(props)
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          { props.list.map( item => (
            <tr key={item.login.username}>
              <td> <img src={item.picture.large} /> </td>
              <td>
                <Link to={`/employee/${item.id.value}`}>
                  {item.name.first}
                </Link>
              </td>
              <td>
                <Link to={`/employee/${item.id}`}>
                  {item.name.last}
                </Link>
              </td>
              <td>{item.email}</td>
              <td>{item.cell}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <style jsx="true">{`

      `}</style>
    </>
  )
}

EmployeeList.defaultProps = {
  list: []
}

EmployeeList.propTypes = {
  list: PropTypes.array
}

export default EmployeeList

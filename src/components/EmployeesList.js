import React from 'react';

class EmployeesList extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredEmployees: [],
      inputName: ''
    };
  }

  handleInputChange = (e, employees) => {
    e.preventDefault();
    const inputName = e.target.value.toLowerCase();
    let filteredEmployees = employees
      .filter(employee => employee.name.toLowerCase().includes(inputName));
    this.setState({
      filteredEmployees: filteredEmployees,
      inputName: inputName
    });
  }

  render() {
    const { employees } = this.props;
    let displayEmployeesList = [];

    if (!this.state.inputName) {
      displayEmployeesList = employees;
    } else {
      if (this.state.filteredEmployees.length > 0) {
        displayEmployeesList = this.state.filteredEmployees;
      } else {
        displayEmployeesList = [];
      }
    }

  return(
      <React.Fragment>
        <div className="controls">
          <input type="text"
            className="filter-input"
            data-testid="filter-input"
            onChange={(e)=>this.handleInputChange(e, employees)} />
        </div>
        <ul className="employees-list">
          { displayEmployeesList.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment >
    );
  }
}

export default EmployeesList;

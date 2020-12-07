import React from 'react';
import ReactDOM from 'react-dom';

const employee = {
  id: 1009325,
  name: "Vijay",
  location: "Jaipur",
  salary: 100000,
  bs: 50000,
  hra: 25000,
  sa: 25000

}
class Salary extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bs : this.props.sd.bs,
      hra : this.props.sd.hra,
      sa : this.props.sd.sa
    }
  }
  updateSalary = () => {
    let bs = parseInt(this.refs.bs.value);
    let hra = parseInt(this.refs.hra.value);
    let sa = parseInt(this.refs.sa.value);
    let salary = bs + hra + sa;
    this.props.sd.onSalaryChanges(salary);
  }
  render(){
    console.log()
    return (
      <div>
        <h1>Salary details.....</h1>
        <p><label>Basic salary : <input type = "text" ref = "bs" defaultValue = {this.state.bs}></input></label></p>
        <p><label>HRA : <input type = "text" ref = "hra" defaultValue = {this.state.hra}></input></label></p>
        <p><label>SA : <input type = "text" ref = "sa" defaultValue = {this.state.sa}></input></label></p>
        <button onClick= {this.updateSalary}>Update</button>
      </div>
    )
  }
}

class Employee extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      updateSalary: null
    };
  }
  getUpdatedSalary = (salary) => {
    this.setState({updateSalary: salary})
  }
  render(){
    const sd = {
      bs: this.props.employee.bs,
      hra: this.props.employee.hra,
      sa: this.props.employee.sa,
      onSalaryChanges: this.getUpdatedSalary
    }
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td><b>id : </b>{this.props.employee.id}</td>
          </tr>
          <tr>
            <td><b>name : </b>{this.props.employee.name}</td>
          </tr>
          <tr>
            <td><b>location : </b>{this.props.employee.location}</td>
          </tr>
          <tr>
            <td><b>salary : </b>{this.props.employee.salary}</td>
          </tr>
          <tr>
            <td><b>Updated salary : </b>{this.state.updateSalary}</td>
          </tr>
          </tbody>
        </table>
        <Salary sd = {sd}></Salary>
      </div>
    );
  }
}



const element = <Employee employee = {employee}></Employee>

ReactDOM.render(element,document.getElementById("root"));
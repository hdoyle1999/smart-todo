import React, { Component } from 'react'

class CreateToDo extends Component {
  state = {
    item: '',
    details: '',
    when: '',
    where: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //window.location="/ToDo"
  }
  render() {
    return (
      <div className="create-container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"></link> 
        {/*Putting this here as it messes up the nabar in index.html */}
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="pink-text text-lighten-1">Create new To Do item</h5>
          <div className="input-field">
            <label htmlFor="text">ToDo</label>
            <input type="text" id='item' onChange={this.handleChange} />  
          </div>
          <div className="input-field">
            <label htmlFor="text">Details</label>
            <input type="text" id='details' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="text">When?</label>
            <input type="text" id='when' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="text">Where?</label>
            <input type="text" id='where' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create To Do</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateToDo;
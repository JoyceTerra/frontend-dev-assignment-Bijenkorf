import React, { Component } from 'react';
import  './InputForm.css'
import Axios from 'axios';

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      search: '',
      results: []
    }
  }

  setActive = () => {
    this.setState({active: !this.state.active})
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  resetSearch = () => {
    this.setState({search: ''})
  }

  apiCall = () => {
    Axios.get(`http://localhost:5000/search?q= ${this.state.search}`)
    .then(response => {
      this.setState({results: response.data})
    })
    .catch(error => console.log(error))
  }

    render() {
      return (
        <div>
          <form>
            <input className="input-field" 
                        type="text" 
                        name="input" 
                        aria-label="input search" 
                        value={this.state.search} 
                        onFocus={this.setActive} 
                        onChange={(e) => this.handleChange(e)} 
                        placeholder={this.props.placeholder} 
              /> {console.log(this.state)}
            {this.state.search && 
            <button className="clear-input" 
                        type="reset" 
                        onClick={this.resetSearch} >
            </button>}
          </form>
        </div>
      )
    }
  }
  
  export default InputForm



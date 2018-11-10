import React, { Component } from 'react';
import axios from 'axios';
import ItemList from '../ItemList/ItemList'
import  './InputForm.css'

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


  // apiCall = () => {
  //   axios.get(`http://localhost:5000/search?q= ${this.state.search}`)
  //       .then(result => result.json())
  //       .then(response => {
  //         const search = reponse.data.suggestions.filter(i=> i.searchterm.includes(this.state.search))
  //         this.setState({result: search})
  //       })
  //       .catch(err => console.log(err))
  //   }
  
  apiCall = () => {
    axios.get(`http://localhost:5000/search?q= ${this.state.search}`)
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
                        onKeyUp={this.apiCall}
                        onFocus={this.setActive} 
                        onChange={(e) => this.handleChange(e)} 
                        placeholder={this.props.placeholder} 
              /> {console.log(this.state)}
            {this.state.search && 
            <button className="clear-input" 
                        type="reset" 
                        onClick={this.resetSearch} >
            </button>}
            {this.state.search.length > 2 && 
            <ItemList list={this.state.results.suggestions}/>}
          </form>
        </div>
      )
    }
  }
  
  export default InputForm



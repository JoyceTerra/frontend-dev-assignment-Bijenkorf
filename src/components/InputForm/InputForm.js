import React, { Component } from 'react';
import  './InputForm.css'

class InputForm extends Component {

    render() {
      return (
          <form>
            <div>
              <input className="input-field" type="text" aria-label="input search" placeholder={this.props.placeholder} /> 
            </div>
          </form>
      )
    }
  }
  
  export default InputForm;



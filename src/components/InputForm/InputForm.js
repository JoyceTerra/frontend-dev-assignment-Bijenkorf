import React, { Component } from 'react';
import  './InputForm.css'

class InputForm extends Component {

    render() {
      return (
        <div className="input-container">
            <form>
                <input className="input-field" type="text" aria-label="input search" placeholder={this.props.placeholder} /> 
            </form>
          </div>

      )
    }
  }
  
  export default InputForm;



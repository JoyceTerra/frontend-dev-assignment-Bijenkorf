import React from 'react'
import chai from 'chai'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'
import chaiEnzyme from 'chai-enzyme'
import InputForm from './InputForm'

chai.use(chaiEnzyme())

describe('InputForm', () => {
    const wrapper = shallow(<InputForm />)
    const form = mount(<InputForm />)
    const instance = form.instance()
    const handleChange = sinon.spy(instance, 'handleChange')
    const setActive = sinon.spy(instance, 'setActive')

    it('is wrapped in a div', () => {
      expect(wrapper).to.have.tagName('div')
    })

    it('contains form with type text', () => {
        expect(wrapper.find('form')).to.have.attr('type').equal('text')
    })

    it('input field has a placeholder Zoeken', () => {
        expect(wrapper.find('input')).to.have.attr('placeholder').equal('Zoeken')
      })
    
      it('has a button', () => {
        expect(wrapper.find('button').length).to.equal(1)
      })

      describe('button', () => {
        const inputForm = mount(<InputForm />)
        const instaceForm = inputForm.instance()
        const button = inputForm.find('button')
        const clearInput = buttons.first()
  
        it('has type reset', () => {
          expect(clearInput).to.have.attr('type').equal('reset')
        })
  
        it('shows close button on active state', () => {
            clearInput.find('input').simulate('focus')
        })
      })

})
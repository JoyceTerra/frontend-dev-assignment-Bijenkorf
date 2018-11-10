import React from 'react'
import chai from 'chai'
import { shallow, mount, configure } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
// import sinon from 'sinon'
import chaiEnzyme from 'chai-enzyme'
import InputForm from './InputForm'

chai.use(chaiEnzyme())

describe('InputForm', () => {
    const wrapper = shallow(<InputForm />)
    const form = mount(<InputForm />)
    const instance = form.instance()

    it('is wrapped in a div with role searchbox', () => {
      expect(wrapper).to.have.tagName('div')
    })

    it('contains form with type text', () => {
        expect(wrapper.find('form')).to.have.attr('type').equal('text')
    })

    it('input field has placeholder Zoeken', () => {
        expect(wrapper.find('input')).to.have.attr('placeholder').equal('Zoeken')
      })

})
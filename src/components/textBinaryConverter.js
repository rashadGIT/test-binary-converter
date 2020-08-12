import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import convert from '../utils/utils'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Form, TextArea } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import '../css/textBinaryConverter.css';

export default class bmiCalculator extends Component {
  constructor(props){
    super(props);
    this.state={
      text : '',
      binary : '',
      isText : false
    }
  }

  handleChange = (evt, returnText) => {
    if(returnText){
      this.setState({isText : !returnText, text : evt.target.value, binary : convert.toBinary(evt.target.value)})
    }else{
      this.setState({isText : !returnText, text : convert.toText(evt.target.value), binary : evt.target.value})
    }
  }

  render() {
  return (
    <div className="boarder">
      <div className="box">
        <div className="container">
            <div style={{width : '100%'}} >
              <div>Text</div>
              <TextArea 
                style={{ minHeight: 200, width: '100%', padding :'10px' }}
                className="textBox" 
                variant="outlined"
                value={this.state.text}
                onChange={(evt) => this.handleChange(evt, true)}
              />
            </div>
            <Icon name={this.state.isText ? 'angle double left': 'angle double right'} size='massive' />
            <div style={{width : '100%'}} >
              <div>Binary</div>
              <TextArea 
                style={{ minHeight: 200, width: '100%', padding :'10px' }}
                className="textBox" 
                variant="outlined"
                value={this.state.binary}
                onChange={(evt) => {this.handleChange(evt,false)}}
              />
            </div>
        </div>
      </div>
    </div>
  );
  }
}

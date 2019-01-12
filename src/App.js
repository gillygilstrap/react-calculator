import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      inputDisplayArr: [0],
      lastNumber: 0,
      activeOperator: null,
      operatorSymbol: '',
      activeValue: 0,
      value: 0
    }
  }
  handleNumberClick = (number) => {
    let stateArr;
    if (this.state.activeValue === 0) {
    stateArr = this.state.inputDisplayArr.slice()
    } else {
      stateArr = [0]
      this.setState({
        activeValue: 0
      })
    }
    
    if ( (number === 0 || number === 'dbl') && stateArr[0] === 0 && stateArr[1] !== '.') {
      return
    }
    for (let i = 0; i < stateArr.length; i++) {
      if (stateArr[i] === '.' && number === '.')
      return 
      
    }
    if(stateArr[0] === 0  &&  number !== '.' && (number !== 0 || number !== 'dbl') && stateArr[1] !== '.') {
        stateArr = []
        stateArr.push(number) 
        this.setState ({
        inputDisplayArr: stateArr
      })
    } else if(number === 'dbl')  {
      stateArr.push(0)
      stateArr.push(0) 
      this.setState ({
      inputDisplayArr: stateArr
      })
    }else  {
      stateArr.push(number) 
      this.setState ({
        inputDisplayArr: stateArr,

      })
    }
  }
  handleOperatorClick = (operator) => {
    let num = this.state.inputDisplayArr.slice()
    let joined = num.join('')
    let joinedNumber = Number(joined)
    
    switch(operator) {
      case 'divide':
      this.setState({
        activeOperator: 'divide',
        operatorSymbol: <i className="fas fa-divide"></i>,
        activeValue: joinedNumber,
        value: joinedNumber
      })
      break;
      case 'times':
      this.setState({
        activeOperator: 'times',
        operatorSymbol:  <i className="fas fa-times"></i>,
        activeValue: joinedNumber,
        value: joinedNumber
      })
      break;
      case 'minus':
      this.setState({
        activeOperator: 'minus',
        operatorSymbol:  <i className="fas fa-minus"></i>,
        activeValue: joinedNumber,
        value: joinedNumber
      })
      break;
      case 'plus':
      this.setState({
        activeOperator: 'plus',
        operatorSymbol:  <i className="fas fa-plus"></i>,
        activeValue: joinedNumber,
        value: joinedNumber
      })
      break; 
      
      default:
      break;
    }
    
  }
  handleEqualClick = () => {
    const {activeOperator, value} = this.state
    let num = this.state.inputDisplayArr.slice()
    let joined = num.join('')
    let joinedNumber = Number(joined)

    switch(activeOperator) {
      case 'plus':
      let added = value + joinedNumber
      let splitAdded = added.toString().split('')
      this.setState({
        inputDisplayArr: splitAdded,
        activeOperator: null,
        operatorSymbol: ''
      })
      break;

      case 'minus':
      let subtracted = value - joinedNumber
      let splitSubtracted = subtracted.toString().split('')
      this.setState({
        inputDisplayArr: splitSubtracted,
        activeOperator: null,
        operatorSymbol: ''
      })
      break;

      case 'times':
      let multiplied = value * joinedNumber
      let splitMultiplied = multiplied.toString().split('')
      this.setState({
        inputDisplayArr: splitMultiplied,
        activeOperator: null,
        operatorSymbol: ''
      })
      break;

      case 'divide':
      let divided = value / joinedNumber
      let splitDivided = divided.toString().split('')
      this.setState({
        inputDisplayArr: splitDivided,
        activeOperator: null,
        operatorSymbol: ''
      })
      break;

      default:
      break;
    }
  }
  clearInput = () => {
    this.setState({
      inputDisplayArr: [0],
      activeOperator: null,
      operatorSymbol: ''
    })
  }
  render() {
    const {inputDisplayArr, activeOperator, operatorSymbol} = this.state
    let inputDisplay;
    if (inputDisplayArr.length > 10) {
      inputDisplay = inputDisplayArr.slice(0,9).join('')
    } else {
       inputDisplay = inputDisplayArr.join('')
    }
    return (
      <div className="App">
        <div className="calc-box">
        <div className="title-box">
          <h1>React <i class="fab fa-react"></i> Calculator</h1>
          {/* <h1>React.js Calculator</h1> */}
        </div>
          <div className="calc-container">
            <div className="screen-box">
              <div className="operator-box">
              {!activeOperator? '' : operatorSymbol}
              </div>
              <input type="text" className="screen" value={inputDisplay}/>
            </div>
            <div className="keypad-box">
                <button className="num-button" onClick={() => this.handleNumberClick(7)}>7</button>
                <button className="num-button" onClick={() => this.handleNumberClick(8)}>8</button>
                <button className="num-button" onClick={() => this.handleNumberClick(9)}>9</button>
                <button className="operator-button" onClick={() => this.handleOperatorClick('divide')}>&#247;</button>
            </div>
            <div className="keypad-box">
                <button className="num-button" onClick={() => this.handleNumberClick(4)}>4</button>
                <button className="num-button" onClick={() => this.handleNumberClick(5)}>5</button>
                <button className="num-button" onClick={() => this.handleNumberClick(6)}>6</button>
                <button className="operator-button" onClick={() => this.handleOperatorClick('times')}>&#215;</button>
            </div>
            <div className="keypad-box">
                <button className="num-button" onClick={() => this.handleNumberClick(1)}>1</button>
                <button className="num-button" onClick={() => this.handleNumberClick(2)}>2</button>
                <button className="num-button" onClick={() => this.handleNumberClick(3)}>3</button>
                <button className="operator-button" onClick={() => this.handleOperatorClick('minus')}>&#8722;</button>
            </div>
            <div className="keypad-box">
                <button className="num-button" onClick={() => this.handleNumberClick(0)}>0</button>
                <button className="num-button dbl-zero-btn" onClick={() => this.handleNumberClick("dbl")}>00</button>
                <button onClick={() => this.handleNumberClick('.')} className="num-button">.</button>
                <button className="operator-button" onClick={() => this.handleOperatorClick('plus')}>&#43;</button>
            </div>
            <div className="eql-btn-box">
              <button className="clear-btn" onClick={this.clearInput}>C</button>
              <button className="equal-btn" onClick={this.handleEqualClick}>&#61;</button>
              <div className="fakey-box"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

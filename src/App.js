import React, { Component } from 'react';
import './App.css';
import { TweenMax, Bounce, Power0 } from "gsap/all"

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

  componentDidMount() {
    let title = document.getElementById('test')
    let btn7 = document.getElementById('btn-7')
    let btn8 = document.getElementById('btn-8')
    let btn9 = document.getElementById('btn-9')
    let divide = document.getElementById('divide')

    let btn4 = document.getElementById('btn-4')
    let btn5 = document.getElementById('btn-5')
    let btn6 = document.getElementById('btn-6')
    let times = document.getElementById('times')

    let btn1 = document.getElementById('btn-1')
    let btn2 = document.getElementById('btn-2')
    let btn3 = document.getElementById('btn-3')
    let minus = document.getElementById('minus')

    let btn0 = document.getElementById('btn-0')
    let dbl = document.getElementById('dbl')
    let dot = document.getElementById('dot')
    let plus = document.getElementById('plus')

    let equalBtn = document.getElementById('equalBtn')
    let clearBtn = document.getElementById('clearBtn')

    let titleBox = document.getElementById('title-box')
    let calcContainer = document.getElementById('calc-container')
    let calcBox = document.getElementById('calc-box')


    TweenMax.from(title, 2.5, { ease: Bounce.easeOut, y: -500 } )
    TweenMax.from(btn7, 1.5, {y: 0, x:-1500 })
    TweenMax.from(btn8, 1, {y: 0, x:-1500 })
    TweenMax.from(btn9, 1, {y: 0, x:1500 })
    TweenMax.from(divide, 1.5, {y: 0, x:1500 })

    TweenMax.from(btn4, 1.5, {y: 0, x:-1500 })
    TweenMax.from(btn5, 1, {y: 0, x:-1500 })
    TweenMax.from(btn6, 1, {y: 0, x:1500 })
    TweenMax.from(times, 1.5, {y: 0, x:1500 })

    TweenMax.from(btn1, 1.5, {y: 0, x:-1500 })
    TweenMax.from(btn2, 1, {y: 0, x:-1500 })
    TweenMax.from(btn3, 1, {y: 0, x:1500 })
    TweenMax.from(minus, 1.5, {y: 0, x:1500 })

    TweenMax.from(btn0, 1.5, {y: 0, x:-1500 })
    TweenMax.from(dbl, 1, {y: 0, x:-1500 })
    TweenMax.from(dot, 1, {y: 0, x:1500 })
    TweenMax.from(plus, 1.5, {y: 0, x:1500 })

    TweenMax.from(clearBtn, 1.5, {y: 0, x:-1500 })
    TweenMax.from( equalBtn, 3, {delay:1.5, opacity: 0})

    TweenMax.from(titleBox, .1, {y: 0, x:-1500 })
    TweenMax.from(calcContainer, .5, {y: 1500, x:0 })
    TweenMax.from(calcBox, .5, {y: 1500, x:0 })
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
        <div id="calc-box" className="calc-box">
        <div id="title-box"className="title-box">
          <h1>React <i id="test" class="fab fa-react"></i> Calculator</h1>
          {/* <h1>React.js Calculator</h1> */}
        </div>
          <div id="calc-container" className="calc-container">
            <div className="screen-box">
              <div className="operator-box">
              {!activeOperator? '' : operatorSymbol}
              </div>
              <input type="text" className="screen" value={inputDisplay}/>
            </div>
            <div className="keypad-box">
                <button id="btn-7" className="num-button" onClick={() => this.handleNumberClick(7)}>7</button>
                <button id="btn-8" className="num-button" onClick={() => this.handleNumberClick(8)}>8</button>
                <button id="btn-9" className="num-button" onClick={() => this.handleNumberClick(9)}>9</button>
                <button id="divide" className="operator-button" onClick={() => this.handleOperatorClick('divide')}>&#247;</button>
            </div>
            <div className="keypad-box">
                <button id="btn-4" className="num-button" onClick={() => this.handleNumberClick(4)}>4</button>
                <button id="btn-5" className="num-button" onClick={() => this.handleNumberClick(5)}>5</button>
                <button id="btn-6" className="num-button" onClick={() => this.handleNumberClick(6)}>6</button>
                <button id="times" className="operator-button" onClick={() => this.handleOperatorClick('times')}>&#215;</button>
            </div>
            <div className="keypad-box">
                <button id="btn-1" className="num-button" onClick={() => this.handleNumberClick(1)}>1</button>
                <button id="btn-2" className="num-button" onClick={() => this.handleNumberClick(2)}>2</button>
                <button id="btn-3" className="num-button" onClick={() => this.handleNumberClick(3)}>3</button>
                <button id="minus" className="operator-button" onClick={() => this.handleOperatorClick('minus')}>&#8722;</button>
            </div>
            <div className="keypad-box">
                <button id="btn-0" className="num-button" onClick={() => this.handleNumberClick(0)}>0</button>
                <button id="dbl" className="num-button dbl-zero-btn" onClick={() => this.handleNumberClick("dbl")}>00</button>
                <button id="dot" onClick={() => this.handleNumberClick('.')} className="num-button">.</button>
                <button id="plus" className="operator-button" onClick={() => this.handleOperatorClick('plus')}>&#43;</button>
            </div>
            <div className="eql-btn-box">
              <button id="clearBtn" className="clear-btn" onClick={this.clearInput}>C</button>
              <button id="equalBtn" className="equal-btn" onClick={this.handleEqualClick}>&#61;</button>
              <div className="fakey-box"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

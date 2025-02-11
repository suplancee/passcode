import { useState } from 'react'; 
import './App.css';

function CalculatorDisplay({display}) {
  return (
    <div className="CalculatorDisplay">
      {display}
    </div>
  );
}

function CalculatorButton({value, onClick}) {
  return (
    <button className="CalculatorButton" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {

  const [pin, setPin] = useState("1234567890");
  const [num, setNum] = useState(0);
  const [disp, setDisp] = useState("ENTER CODE");
  const [changePinState, setChangePinState] = useState(0);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
      if (num === 0) {
        setNum(value)
        setDisp(value);
      } else {
        setNum(num+value)
        setDisp(num+value);
      }
    console.log(num.length);
    console.log(num +'|'+ disp);
  };

  const enterClickHandler = () => {    
    if (changePinState === 0) {
      if(num === pin) {
        setDisp("OPEN");
      } else {
        setDisp("LOCKED");
      }
    } else if (changePinState === 1) {
      if(num === pin) {
        setDisp("ENTER NEW CODE");
        setChangePinState(2);
      } else {
        setDisp("INVALID CODE");
      }
    } else if (changePinState === 2) {
      if(num.length >= 8) {
        setPin(num);
        setDisp("CHANGE CODE SUCCESSFUL");
        setNum(0);
        setChangePinState(0);
      } else {
        setDisp("CODE SHOULD BE 8 DIGITS");
        setNum(0);
      }
    }
    setNum(0);
    console.log(num +'|'+ disp);    
  };

  const clearClickHandler = () => {
    setNum(0);
    setDisp("INPUT CODE");

    console.log(num +'|'+ disp);
  };

  const nameClickHandler = () => {
    setNum(0);
    setDisp("LANCE P. CHINCUANCO");
  };

  const subjClickHandler = () => {
    setNum(0);
    setDisp("C-PEITEL3");
  };

  const pinClickHandler = () => {
    setNum(0);
    setDisp("ENTER CURRENT CODE");
    setChangePinState(1);
    console.log(num +'|'+ disp);
  };

  return ( 
    <div className="CalculatorContainer">
      <CalculatorDisplay display={disp}/>
      <div className="CalculatorButtonsContainer">
        <CalculatorButton value="7" onClick={numberClickHandler}/>
        <CalculatorButton value="8" onClick={numberClickHandler}/>
        <CalculatorButton value="9" onClick={numberClickHandler}/>
        <CalculatorButton value="4" onClick={numberClickHandler}/>
        <CalculatorButton value="5" onClick={numberClickHandler}/>
        <CalculatorButton value="6" onClick={numberClickHandler}/>
        <CalculatorButton value="1" onClick={numberClickHandler}/>
        <CalculatorButton value="2" onClick={numberClickHandler}/>
        <CalculatorButton value="3" onClick={numberClickHandler}/>
        <CalculatorButton value="RESET" onClick={clearClickHandler}/>
        <CalculatorButton value="0" onClick={numberClickHandler}/>
        <CalculatorButton value="ENTER" onClick={enterClickHandler}/>
        <CalculatorButton value="NAME" onClick={nameClickHandler}/>
        <CalculatorButton value="SUBJ" onClick={subjClickHandler}/>
        <CalculatorButton value="PIN" onClick={pinClickHandler}/>
      </div>  
    </div>  
  );
}

export default App;

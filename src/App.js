import React from "react";
import cut from './cut.png'
 



function App() {

  return (

    <center>
      <div className="box">

        <div class="result">
          <p></p>
        </div>
        <div class="inner">
          <button name="C" className="clear btn">C</button>
          <button name="%" className="remainder btn ">%</button>
          <button name="X" className="back btn"><img src={cut} alt="cut" height={20} width={30} /></button>
          <button name="/" className="divide btn ">/</button>
          <button name="7" className="seven btn">7</button>
          <button name="8" className="eight btn">8</button>
          <button name="9" className="nine btn">9</button>
          <button name="*" className="multiply btn ">x</button>
          <button name="4" className="four btn">4</button>
          <button name="5" className="five btn">5</button>
          <button name="6" className="six btn">6</button>
          <button name="-" className="minus btn ">-</button>
          <button name="1" className="one btn">1</button>
          <button name="2" className="two btn">2</button>
          <button name="3" className="three btn">3</button>
          <button name="+" className="plus btn ">+</button>
          <button name="00" className="double-0 btn">00</button>
          <button name="0" className="zero btn">0</button>
          <button name="." className="point btn">.</button>
          <button name="=" className="equal btn">=</button>
        </div>
      </div>
    </center>

  );
}
export default App;

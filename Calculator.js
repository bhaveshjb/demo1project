git staimport React, {useState} from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";

const Calculator = () => {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Addition</Link>
                    </li>
                    <li>
                        <Link to='/subtraction'>Subtraction</Link>
                    </li>
                    <li>
                        <Link to='/multiplication'>Multiplication</Link>
                    </li>
                    <li>
                        <Link to='/division'>Division</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Addition}/>
                    <Route exact path='/subtraction' component={Subtraction}/>
                    <Route exact path='/multiplication' component={Multiplication}/>
                    <Route exact path='/division' component={Division}/>
                </Switch>
            </div>
        </Router>
    );
}
export default Calculator;


const Addition = () => {

    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [result, setResult] = useState(null);

    const add = () => {
        return(
            setResult(parseInt(num1) + parseInt(num2))
        );
    }

    return(
      <div>
          <h1>ADDITION</h1>
          Enter the first number:&nbsp;
          <input
              type="text"
              onChange={event => setNum1(event.target.value)}
          />
          <br/><br/>

          Enter the second number:&nbsp;
          <input
              type="text"
              onChange={event => setNum2(event.target.value)}
          />
          <br/><br/>

          Result is: {result}

          <br/><br/>

          <button onClick={add}>Addition</button>

      </div>
    );
}

const Subtraction = () =>{

    const [num1,setNum1] = useState(null);
    const [num2,setNum2] = useState(null);
    const [result,setResult] = useState(null);

    const sub = () => {
        return(
            setResult(num1-num2)
        );
    };
    return(
        <div>
            <h1>SUBTRACTION</h1>
            Enter the first number:&nbsp;
            <input
                type="text"
                onChange={event => setNum1(event.target.value)}
                />
                <br/><br/>

                Enter the second number:&nbsp;
                <input
                type="text"
                onChange={event => setNum2(event.target.value)}
                />
            <br/><br/>

            Result is : {result}
            <br/><br/>

            <button onClick={sub}>Subtraction</button>
        </div>
    );
}

const Multiplication = () =>{

    const [num1,setNum1] = useState(null);
    const [num2,setNum2] = useState(null);
    const [result,setResult] = useState(null);

    const mul = () =>{
        return(
            setResult(num1*num2)
        );
    };
    return(
      <div>
          <h1>MULTIPLICATION</h1>
          Enter the first number:&nbsp;
          <input
              type="text"
              onChange={event => setNum1(event.target.value)}
              />
          <br/><br/>
          Enter the second number:&nbsp;
          <input
              type="text"
              onChange={event => setNum2(event.target.value)}
              />
          <br/><br/>

          Result is : {result}
          <br/><br/>

          <button onClick={mul}>Multiplication</button>
      </div>
    );
}

const Division = () => {

    const [num1,setNum1] = useState(null);
    const [num2,setNum2] = useState(null);
    const [result,setResult] = useState(null);

    const div = () => {
      return(
        setResult(num1/num2)
      );
    }
    return(
      <div>
          <h1>DIVISION</h1>
          Enter the first number:&nbsp;
          <input
              type="text"
              onChange={event => setNum1(event.target.value)}
              />
          <br/><br/>
          Enter the second number:&nbsp;
          <input
              type="text"
              onChange={event => setNum2(event.target.value)}
              />
          <br/><br/>

          Result is : {result}
          <br/><br/>

          <button onClick={div}>Division</button>
      </div>
    );
}
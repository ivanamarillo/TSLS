//ganchos
import {useState} from 'react';

const CountFunction = (props) => {

    // const state = useState(0);
    // console.log(state);      //[0, func]
    // const count = state[0];
    // const setCount = state[1];

    const [count, setCount] = useState(0);

    const decrement = _ => {
        setCount(count - 1);
    };

    const increment = _ => {
        setCount(count + 1)
    }
    

    console.log(props);
    return (
        <div>
            <h1 style={{color:props.color}}>Contador Funcion</h1>
            <button onClick={decrement}>-</button>
            <h1 style={{color:props.color}}>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default CountFunction
import {useState} from 'react'; //gancho o hook
import Button from '../Button/Button';

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
        <div style={{display:'flex'}}>
            {props.children}
            <h1 style={{color:props.color, paddingRight:10}}>Contador Funcion</h1>
            <Button handleClick={decrement} label='-' color='red'/>
            <h1 style={{color:props.color}}>{count}</h1>
            <Button handleClick={increment} label='+' color='green'/>
        </div>
    )
}

export default CountFunction
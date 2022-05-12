const CountFunction = (props) => {
    let count = 0;
    const decrement = _ => {
        count--;
    };
    const increment = _ => {
        count++;
    };

    console.log(props);
    return (
        <div>
            <button onClick={decrement}>-</button>
            <h1 style={{color:props.color}}>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default CountFunction
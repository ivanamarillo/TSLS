import {Component} from 'react';

class CountClass extends Component {
    render() {
        console.log(this.props);
        return (
            <h1 style={{color: this.props.color}}>Contador Clase</h1>
        )
    }
}

export default CountClass;
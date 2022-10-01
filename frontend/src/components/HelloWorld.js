import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWord extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: ''
        };
    }

    callAPI() {
        fetch("http://localhost:3000/hello")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }
    
    render() {
        return (
            <div className="apiResponse">
                <h1>{this.state.apiResponse}</h1>
            </div>
        );
    }
}


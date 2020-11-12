import React, { Component } from 'react';
import styled from "styled-components";

const Temp = styled.div`
    width: 100%;
    height: 100vh;
    background: #e9ebee;
    color: #121212;
    font-size: 16px;
`;

class Main extends Component {
    state = {
        test: "Webpack Test",
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {
            test,
        } = this.state;

        return (
            <Temp>
                {test}
            </Temp>
        );
    }
}

export default Main;

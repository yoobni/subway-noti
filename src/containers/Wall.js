import React from 'react';
import { Home } from 'containers';

class Wall extends React.Component {
    render() {
        console.log(this.props);

        return (
            <Home username={this.props.params.username}></Home>
        );
    }
}

export default Wall;
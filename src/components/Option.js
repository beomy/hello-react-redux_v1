import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div>
                <input value={this.props.diff} onChange={this.onChange} />
            </div>
        );
    }
}

export default Option;
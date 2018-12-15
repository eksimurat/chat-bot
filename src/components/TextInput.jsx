import React, { Component } from 'react';

import "../styles/TextInput.scss"

export default class TextInput extends Component {


    static defaultProps = {
        locked: false,
        focussed: true,
        value: '',
        error: '',
        label: '',
        onChange: () => '',
    };


    constructor(props) {
        super(props);
        this.state = {
            focussed: (props.locked && props.focussed) || false,
            value: props.value || '',
            error: props.error || '',
            label: props.label || '',
        };
    }

    onChange = event => {
        const value = event.target.value;
        this.setState({ value, error: '' });
        return this.props.onChange( value);
    }

    onKeyDown = event => {
        if(event.keyCode === 13){
            this.props.handleSend(this.state.value)
            this.setState({
                value: ""
            })
        } 
    }


    render() {

        const { value, label } = this.state;


        return (

            <input
                className="field"
                type="text"
                value={value}
                placeholder={label}
                onChange={this.onChange}
                onKeyDown = {this.onKeyDown}
            />

        )
    }
}
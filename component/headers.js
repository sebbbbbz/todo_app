import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// This is a stateless functional component
// const Header = (props) => <Text>{ props.textIwant }</Text>;

// This is a stateful functional component
class Header extends React.Component {

    constructor(props) { // Set state up
        super(props); // Run state

        // How we create properties
        this.textIwant = props.textIwant;
        // How we create state
        this.state = {
            number: 0
        };
        // Boiler plate to write when adding function
        this.addNumberWhenPressed = this.addNumberWhenPressed.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state.number);
    }

    // trigger update of state
    addNumberWhenPressed() { // how we manipulate state or trigger update or state
        const previousNumber = this.state.number; // variable that stores current state
        this.setState({ // function to change the state
            number: previousNumber + 1
        });
    }

    render() {
        return (
            <Text onPress={this.addNumberWhenPressed}>{this.textIwant}</Text>
        );
    }
}

export default Header;

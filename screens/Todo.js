import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

class TodoScreen extends React.Component {
 
    static navigationOptions = {
        title: 'Todo',
      }; 

    render() {
        return (
            //<View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}>
                //<View 
                    //style={{ 
                        //flex: 1,
                        //backgroundColor: 'aliceblue' 
                    //}} 
                ///>
             //<View style={{ flex: 1, backgroundColor: 'lavenderblush' }} />
             //<View style={{ flex: 1, backgroundColor: 'lightcyan' }} />
          //</View>);
            <ScrollView>
                <View style={styles.container1} />
                <View style={styles.container2} />
                <View style={styles.container3} />
                <View style={styles.container4} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        padding: 100,
        backgroundColor: 'blue'
    },
    container2: {
        padding: 100,
        backgroundColor: 'red'
    },
    container3: {
        padding: 100,
        backgroundColor: 'yellow'
    },
    container4: {
        padding: 100,
        backgroundColor: 'white'
    },
});

export default TodoScreen;

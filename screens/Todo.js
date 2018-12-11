import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, SectionList } from 'react-native';

const sections = [
    {
        id: 0,
        title: 'Section 1',
        data:
            [
                { id: 0, text: 'Item 1' },
                { id: 1, text: 'Item 2' },
                { id: 2, text: 'Item 3' },
                { id: 3, text: 'Item 4' }
            ]
    },


    { 
        id: 1, 
        title: 'Section 2', 
        data: 
            [
                { id: 3, text: 'Item 4' }, 
                { id: 4, text: 'Item 5' }
            ] 
    }
];

class TodoScreen extends React.Component {

    static navigationOptions = {
        title: 'Todo',
      }; 

    keyExtractor = (item, index) => item.id;

    renderRow = ({ item }) =>
      (<View style={styles.row}>
        <Text>{item.text}</Text>
      </View>);

        renderSectionHeader = ({ section }) => (
            <View style={styles.row}>
                <Text>{section.title}</Text>
            </View>
        );

        renderSectionHeader = ({ section }) => (
            <View style={styles.header}>
                <Text>{section.title}</Text>
            </View>
        );

    render() {
        return (
            <SectionList
                sections={sections}
                renderItem={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

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
            /* {<ScrollView>
                <View style={styles.container1} />
                <View style={styles.container2} />
                <View style={styles.container3} />
                <View style={styles.container4} />
            </ScrollView>} */

const styles = StyleSheet.create({
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    },
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'pink'
    },
    // styledText: {
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     textDecorationLine: 'underline',
    //     backgroundColor: 'aliceblue',
    //     marginBottom: 20,
    //     padding: 30, 
    // },
    // styledText1: {
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     textDecorationLine: 'underline',
    //     backgroundColor: 'pink',
    //     marginBottom: 20,
    //     padding: 30, 
    // },
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

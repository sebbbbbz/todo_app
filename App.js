import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          xlarge
          rounded
          source={{uri: "https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/28701063_10156154824598609_642075158746097129_o.jpg?_nc_cat=110&_nc_ht=scontent-sin6-1.xx&oh=9aeaa03e40d6f9987afa2e79edda4494&oe=5CA4965B"}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <Text Style={styles.bigblue}>I am handsome!</Text>

        <Button 
        onPress={() => { console.log('happy'); }} 
        title={'Hello'} 
        color='blue' 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import Header from './component/headers';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TodoScreen from './screens/Todo';
import FlexboxScreen from './screens/Flexbox';


class App extends React.Component {
 
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Header textIwant={'Welcome to my life!'} />
        <View style={{ padding: 10 }} />
        <Header textIwant={'This is Sebastian'} /> 
        <View style={{ padding: 5 }} />
        <Avatar
          xlarge
          rounded
          source={{ uri: 'https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/28701063_10156154824598609_642075158746097129_o.jpg?_nc_cat=110&_nc_ht=scontent-sin6-1.xx&oh=9aeaa03e40d6f9987afa2e79edda4494&oe=5CA4965B' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <View style={{ padding: 5 }} />
        <Text Style={styles.bigblue}>I am handsome!</Text>
        <View style={{ padding: 5 }} />
        <Button 
          title="Go to Todo"
          onPress={() => this.props.navigation.navigate('Todo')}
        />
        <View style={{ padding: 5 }} />
        <Button 
          title="Go to Flexbox"
          onPress={() => this.props.navigation.navigate('Flexbox')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  Todo: TodoScreen,
  Flexbox: FlexboxScreen,
}, {
 headerLayoutPreset: 'left' 
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

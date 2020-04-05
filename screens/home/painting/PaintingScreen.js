import React from 'react';
import {View, Text, Button} from 'react-native';

export default class PaintingScreen extends React.Component {
  render() {
    return <View style={{flex: 1, backgroundColor: 'pink'}}>
        <Text>Rysowanka</Text>
        <Text>{this.props.description}</Text>
        <Image source={{uri: this.props.image}}/>
        <Button title="Zadanie wykonane" onPress={this.props.state.navigate("Categories")}/>
    </View>
  }
}

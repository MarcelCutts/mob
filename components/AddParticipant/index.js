import React from 'react';
import { StyleSheet, TouchableHighlight, View, TextInput, Text } from 'react-native';

class AddParticipant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onSubmit = e => {
    this.props.addParticipant(this.state.name);
    this.setState({name: ''})
  }

  onChangeText = text => {
    this.setState({name: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.name}
          style={styles.textInput}
          onChangeText={this.onChangeText}
        />
        <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
          <Text>Add +</Text>
        </TouchableHighlight>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    margin: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 1,
    margin: 5
  },
  textInput: {
    flex: 2,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    paddingLeft: 5
  }
});

export default AddParticipant;

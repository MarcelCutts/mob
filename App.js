import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ParticipantList from './components/ParticipantList';
import AddParticipant from './components/AddParticipant';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: []
    };
  };

  addParticipant = participantName => {
    const updatedParticipants = [...this.state.participants, participantName];
    this.setState({participants: updatedParticipants});
  }

  render() {
    return (
      <View style={styles.container}>
        <AddParticipant addParticipant={this.addParticipant} style={styles.addParticipant}/>
        <Text style={styles.participantList}>{this.state.participants.join(' ')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

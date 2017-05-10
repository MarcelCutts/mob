import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ToggleMob from './components/ToggleMob';
import SetupMob from './components/SetupMob';
import RunMob from './components/RunMob';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      isMobbing: false
    };
  };

  addParticipant = participantName => {
    const updatedParticipants = [...this.state.participants, participantName];
    this.setState({participants: updatedParticipants});
  }

  toggleMob = e => {
    this.setState({ isMobbing: !this.state.isMobbing })
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isMobbing ?
          <RunMob /> :
          <SetupMob
            participants={this.state.participants}
            addParticipant={this.addParticipant}
          />
        }
        <ToggleMob
          isMobbing={this.state.isMobbing}
          toggleMob={this.toggleMob}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
  }
});

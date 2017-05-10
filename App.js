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

  toggleIsMobbing = () => {
    this.setState({ isMobbing: !isMobbing })
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isMobbing ?
          <RubMob /> :
          <SetupMob
            participants={this.state.participants}
            addParticipant={this.addParticipant}
          />
        }
        <ToggleMob isMobbing={this.state.isMobbing} />
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
  },
  mobButton: {
    flex: 1,
    backgroundColor: 'purple',
  }
});

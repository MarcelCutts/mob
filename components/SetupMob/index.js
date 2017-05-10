import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddParticipant from '../AddParticipant';
import ParticipantList from '../ParticipantList';

export default class SetupMob extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View syle={styles.container}>
        <AddParticipant addParticipant={this.props.addParticipant}/>
        <Text>{this.props.participants.join(' ')}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

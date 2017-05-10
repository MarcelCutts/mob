import React from 'react';
import { View, Text } from 'react-native';

import AddParticipant from '../AddParticipant';
import ParticipantList from '../ParticipantList';

export default class SetupMob extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <AddParticipant addParticipant={this.props.addParticipant}/>
        <Text style={{flex: 6}}>{this.props.participants.join(' ')}</Text>
      </View>
    );
  }
}

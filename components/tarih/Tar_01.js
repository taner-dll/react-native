
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class Tar_01 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>İlk Türk Devletleri</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  standartText: {
    color: '#795548'
  },
});

export default Tar_01; 
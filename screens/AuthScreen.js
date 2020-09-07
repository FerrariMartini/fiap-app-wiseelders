import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="email@address.com"
        leftIcon={{
          type: 'material',
          name: 'email',
        }}
      />
      <Input
        placeholder="senha"
        secureTextEntry={true}
        leftIcon={{
          type: 'material',
          name: 'lock',
        }}
      />
      <Button
        title="Acessar"
        buttonStyle={styles.loginButton}
        containerStyle={styles.loginButtonContainer}
        onPress={() => navigation.navigate('ExecutiveSummary')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  loginButtonContainer: {
    width: '100%',
    maxWidth: 340,
    padding: 10,
  },
  loginButton: {
    textAlign: 'center',
    width: '100%',
  },
});

export default AuthScreen;

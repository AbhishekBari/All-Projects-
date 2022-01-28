import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Text, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from '../../components/Spacer';
import {Context as AuthContext} from '../../context/AuthContext';

import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener('blur', clearErrorMessage);
  }, []);

  console.log(state);

  return (
    <View style={styles.container}>
      <AuthForm 
       headerText="Sign Up for Tracker"
       errorMessage={state.errorMessage}
       submitButtonText="Sign Up"
       onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={{color: 'blue', marginLeft: 20}}>Already have an account? Sign in!</Text>
      </TouchableOpacity>
     

      {/* <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('TrackList')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
    errorMessage: {
      color: 'red',
      fontSize: 16,
      marginLeft: 15,
    },
  
});

export default SignupScreen;

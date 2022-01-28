import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthForm from '../../components/AuthForm';
// import { NavigationEvents } from 'react-navigation';
import { Context } from '../../context/AuthContext';



const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage } = useContext(Context);

  

  useEffect(() => {
    navigation.addListener('blur', clearErrorMessage);
  }, []);

  return (
    <View style={styles.container}>
      {/* <NavigationEvents 
      // onWillFoucs={() => {}}
      // onDidFocus={() => {}}
      onWillBlur={clearErrorMessage}
      // onDidBlur={() => {}} 
      /> */}
      
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
        
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: 'blue', margin: 20}}>Already have an account? Sign in!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;

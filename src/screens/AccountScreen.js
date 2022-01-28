import React, { useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements';
import Spacer from '../../components/Spacer';
import { Context as AuthContext } from '../../context/AuthContext';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInsert={{ top: 'always' }}>
            <Text style={{fontSize: 48}}>Account Screen</Text>
            <Spacer>
            <Button title='Sign Out' onPress={signout}/>
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default AccountScreen

import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const Sample2 = ({navigation}) => {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Sample2</Text>
            <Button
        title="Go to Sample1"
        onPress={() => navigation.navigate('Sample1')
    }
    styles={{marginTop:40}}
    />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Sample2;

import React from 'react';
import { useState } from 'react';
import {View, StyleSheet,Text,TextInput,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native';
import {Email} from './email.png'
import Toast from 'react-native-simple-toast';


const Login = ({navigation}) => {
    const details=[
        {
            email:"amal",
            password:"2304"
        },
        {
            email:'john',
            password:'2002'
        },
    ]
    const [text, onChangeText] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);
    const [mulSize, setmulSize] = useState(1);
    const [mulSize1, setmulSize1] = useState(1);


    async function loginHanler() {
        setmulSize(1);
        setmulSize1(1);
        var p=0;
        var i=0;
        var code=0

        console.log(`{
            "password":"${pass}",
            "email":"${text}"
        }`)
        const response = await fetch("https://randomfashiongeneratorapi.herokuapp.com/login", {
                                                                                                method: 'POST',
                                                                                                headers: {
                                                                                                'Accept': 'application/json',
                                                                                                'Content-Type': 'application/json'
                                                                                                },
                                                                                                body: `{
                                                                                                    "password":"${pass}",
                                                                                                    "email":"${text}"
                                                                                                }`,
                                                                                                });

                        
                        response.json().then(data => {
                        console.log(data.Approval_code);
                        code=data.Approval_code;
                        if(code==1){
                            navigation.navigate('Home')
                        }
                        else{
                            Toast.show('Wrong Credentials');
                        }
                        });
                        console.log("code",code)
        
        




    }

    const focusScaler1 = () => {
        setmulSize(1.1);    
        setmulSize1(1);
    }

    const focusScaler2 = () => {
        setmulSize(1);
        setmulSize1(1.1);
    }


    return (
        <View>
            <View style={{height:'80%',aspectRatio:1,top:'20%',left:"-65%",backgroundColor:'#66BFBF',transform:[{rotate:"45deg"}]}}>
                <View style={{height:'70%',aspectRatio:1,backgroundColor:'white',left:'10%',top:"20%"}}>
                </View>
            </View>
            <View style={{position:'absolute',left:'15%',height:'70%',width:'90%',justifyContent:'center',top:'10%'}}>
            <TextInput
            style={{height:'12%',width:'80%',elevation:5,top:'30%',backgroundColor:'white',
            borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,padding:'2%',transform:[{scale:mulSize}]}}
            onChangeText={onChangeText}
            placeholder="Username"
            value={text} 
            inlineImageLeft="Email"
            onPressIn={focusScaler1}
            />

            <TextInput
            style={{height:'12%',width:'80%',elevation:5,top:'25%',backgroundColor:'white',marginTop:'10%',
            borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,padding:'2%',transform:[{scale:mulSize1}]}}
            onChangeText={onChangePass}
            placeholder="Password"
            secureTextEntry={true}
            value={pass} 
            inlineImageLeft="Email"
            onPressIn={focusScaler2}
            />
            <TouchableOpacity style={{top:'30%',height:'15%',width:'80%',backgroundColor:'#3AB0FF',elevation:10,alignItems:'center',
            borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopLeftRadius:100,borderTopRightRadius:100
            }}
            onPress={()=>loginHanler()}
            >
                <Text style={{fontSize:20,color:'white',top:'30%'}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{top:'35%',height:'15%',width:'80%',backgroundColor:'#F87474',elevation:10,alignItems:'center',
            borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopLeftRadius:100,borderTopRightRadius:100
            }}
            onPress={()=>navigation.navigate('Register')}
            >
                <Text style={{fontSize:20,color:'white',top:'30%'}}>Register</Text>
            </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Login;
